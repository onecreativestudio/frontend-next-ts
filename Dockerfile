FROM node:18-alpine

# INFO: CONFIGURING WORK DIRECTORY.
RUN mkdir -p /frontend
WORKDIR /frontend

# INFO: COPYING PACKAGE JSON.
COPY package*.json ./

# INFO: ABOUT TO RUN YARN INSTALL.
RUN rm -rf node_modules && yarn install --immutable --immutable-cache --check-cache
# RUN yarn install --frozen-lockfile
# RUN rm -rf node_modules && yarn install --frozen-lockfile



# INFO: COPYING APP FILES.
COPY . .

# INFO: EXPOSING NETWORK PORT.
EXPOSE 3000

# INFO: STARTING DEV ENVIRONMENT.
CMD ["yarn", "dev"]

# ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache
# RUN yarn install --production

# CMD npm run dev
#Prod will look like: ` CMD ["npm", "start"]`
# https://dev.to/kumareth/next-js-docker-made-easy-2bok
