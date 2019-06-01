FROM node:10.15.1

RUN mkdir -p /src/app

WORKDIR /src/app/

COPY package.json /src/app

RUN npm install

COPY . /src/app

ENV NODE_ENV=production
ENV PORT=3002
ENV DB_URI=postgresql://rei:batman123@reviews.c6cy0b3pfl6c.us-west-2.rds.amazonaws.com:5432/reviews

EXPOSE 3002

CMD ["npm", "start"]
