FROM oven/bun:latest as build

WORKDIR /app

COPY . .

RUN bun add vite
RUN bun install
RUN bun run build

FROM nginx:stable-alpine as production

COPY --from=build /app/dist /usr/share/nginx/html

COPY docker/vhost.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]