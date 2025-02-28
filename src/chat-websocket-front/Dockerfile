FROM node:23.9.0-alpine3.21 AS base

RUN corepack enable
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

WORKDIR /app
COPY pnpm-lock.yaml package*.json /app/
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build


FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
