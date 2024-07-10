FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install yarn
EXPOSE 5173
COPY . .
#RUN npm run build
CMD ["yarn", "dev"]