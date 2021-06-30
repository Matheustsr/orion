FROM node:latest

 RUN mkdir /src

 WORKDIR /src
# I really really need explain this?
 COPY package.json /src/

 COPY package-lock.json /src/

 RUN npm install

 ADD . /src/
#Happy Hacking!!!!
