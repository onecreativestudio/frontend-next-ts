FROM node:16-alpine

RUN mkdir -p /frontend

WORKDIR /frontend

COPY package*.json ./

# RUN npm install
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
# CMD npm run dev