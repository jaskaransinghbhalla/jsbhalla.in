FROM node:20
WORKDIR /app
COPY . .
RUN npm install
COPY package*.json ./
EXPOSE 3000
CMD ["npm", "run", "dev"]