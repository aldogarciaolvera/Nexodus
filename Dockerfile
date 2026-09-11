FROM node:26-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install
COPY . .
EXPOSE 8081
CMD ["pnpm", "start"]
