FROM node:18-alpine

# INFO: CONFIGURING WORK DIRECTORY.
RUN mkdir -p /frontend
WORKDIR /frontend

# INFO: COPYING PACKAGE JSON.
COPY package*.json ./

# INFO: ABOUT TO RUN YARN INSTALL.
RUN yarn install

# INFO: COPYING APP FILES.
COPY . .

# INFO: EXPOSING NETWORK PORT.
EXPOSE 3000

# INFO: STARTING DEV ENVIRONMENT.
CMD ["yarn", "dev"]
# CMD ["yarn", "dev"]

# CMD npm run dev
#Prod will look like: ` CMD ["npm", "start"]`
# https://dev.to/kumareth/next-js-docker-made-easy-2bok
