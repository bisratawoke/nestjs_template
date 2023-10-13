FROM node

WORKDIR /usr/local/app

COPY . .

RUN chmod +x ./start.sh

CMD ["./start.sh"]