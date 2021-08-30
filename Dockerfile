FROM node:12.13.0-alpine    

WORKDIR /home/node/app
#&& chown -R node:node /home/node/instats

# Ensure both package.json AND pafreeplan.jsonckage-lock.json are copied
COPY package*.json /home/node/app

# COPY .env /home/node/instats/ 

COPY . /home/node/app

# Defining Working Dir
WORKDIR /home/node/app

EXPOSE 4550

# Install app dependencies
RUN npm install
RUN npm install pm2 -g

#Command to start the app
# CMD [ "npm", "start" ]
ENTRYPOINT ["node", "index"]