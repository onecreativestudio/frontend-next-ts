FROM node:18-alpine

RUN mkdir -p /frontend

WORKDIR /frontend

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]

# CMD npm run dev
#Prod will look like: ` CMD ["npm", "start"]`
# https://dev.to/kumareth/next-js-docker-made-easy-2bok