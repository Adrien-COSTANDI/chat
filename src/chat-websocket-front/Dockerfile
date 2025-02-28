FROM node:23.9.0-alpine3.21 AS base

RUN corepack enable
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

WORKDIR /app
COPY pnpm-lock.yaml package*.json /app/
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build-only


FROM nginx:stable

RUN apt-get update && apt-get install -y \
    certbot \
    python3-certbot-nginx \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
