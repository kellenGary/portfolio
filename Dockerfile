# Stage 1: Build the Svelte app
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npx svelte-kit sync
RUN npm run build

# Stage 2: Use NGINX to serve the built app
FROM nginx:alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html/

# Optional: custom NGINX config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]