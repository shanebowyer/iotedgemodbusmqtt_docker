#FROM risingstack/alpine:3.7-v8.10.0-4.8.0
FROM arm32v6/alpine


#COPY package.json package.json  
COPY package*.json ./
RUN npm install && apk update && apk add bash

# Add your source files
COPY . .  
COPY config.json config.json
CMD npm start && tail -f /dev/null  