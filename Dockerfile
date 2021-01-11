node:8.11.3-alpine
RUN apk update
RUN apk add --no-cache fontconfig curl
RUN apk add --update ttf-dejavu ttf-droid ttf-freefont ttf-liberation ttf-ubuntu-font-family && rm -rf /var/cache/apk/*

RUN wget -qO- "https://github.com/dustinblackman/phantomized/releases/download/2.1.1a/dockerized-phantomjs.tar.gz" | tar xz -C / 
 
RUN mkdir -p /app

WORKDIR /app

COPY package.json package-lock.json ./
npm install -g phantomjs-prebuilt --unsafe-perm
RUN npm install --unsafe-perm
RUN npm install which
COPY . ./

CMD ["npm","start"]
