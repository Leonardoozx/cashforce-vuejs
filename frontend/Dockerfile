FROM node:16.14-alpine

WORKDIR /app-frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

ENV NODE_ENV=production

CMD ["npm", "run", "serve"]