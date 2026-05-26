FROM node:22-alpine

WORKDIR /usr/local/app

# Install the application dependencies
COPY package*.json ./

RUN npm install

# Copy in the source code
COPY . .

EXPOSE 3306

CMD ["node", "index"]