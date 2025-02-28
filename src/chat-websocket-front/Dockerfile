FROM node:23.9.0-alpine3.21 AS base

RUN corepack enable
WORKDIR /app
COPY package*.json /app
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
