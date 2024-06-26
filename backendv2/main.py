import secrets
import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException

from pydantic import BaseModel

import redis.asyncio as redis

class Noteorious(BaseModel):
    note: str
    hash: str

logger = logging.getLogger('Noteorious')
logger.setLevel(logging.DEBUG)

stdout_handler = logging.StreamHandler()
stdout_handler.setLevel(logging.DEBUG)

formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
stdout_handler.setFormatter(formatter)

logger.addHandler(stdout_handler)

pool = redis.ConnectionPool.from_url("redis://redis")
redis_client = redis.Redis(decode_responses=True, protocol=3).from_pool(pool)

async def check_redis_connection():
    try:
        await redis_client.ping()
        logger.info("Redis connection successful")
        return True
    except redis.ConnectionError:
        logger.info("Redis connection failed")
        return False

@asynccontextmanager
async def lifespan(app: FastAPI):
    if not await check_redis_connection():
        raise Exception("Redis connection failed")
    yield
    await redis_client.aclose()


app = FastAPI(lifespan=lifespan)

@app.get("/api/{id}")
async def serve_id(id: str):
    logger.info(f"Get {id}")

    try:
        note = await redis_client.getdel(f"{id}:note")
        hash = await redis_client.getdel(f"{id}:hash")
        
        if note is None or hash is None:
            logger.critical("Something is very strange")
            raise HTTPException(status_code=404)
                
        return {'note': note, 'hash': hash}
    except redis.RedisError as e:
        raise HTTPException(status_code=500)
    except:
        raise HTTPException(status_code=500)
    
@app.post("/api")
async def save_note(body: Noteorious):
    encrypted = body.note
    hash = body.hash

    id = secrets.token_urlsafe(16)

    try:
        await redis_client.set(f"{id}:note", encrypted)
        await redis_client.set(f"{id}:hash", hash)

        logger.info(f"Stored succesfully: {id}")
    except redis.RedisError as e:
        logger.error(f"Redis isn't responding {e}")
        raise HTTPException(status_code=500, detail=str(e))

    return {'id': id}
