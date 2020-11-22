FROM node:14

RUN mkdir /ji-ex

WORKDIR /ji-ex
COPY . /ji-ex

RUN yarn install

EXPOSE 3000
CMD sh -c "yarn build && yarn start"


