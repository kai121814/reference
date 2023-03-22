FROM node:15.9.0

RUN mkdir -p /home/ubuntu/buscaolas/front-end
WORKDIR /home/ubuntu/buscaolas/front-end


EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

COPY . /home/ubuntu/buscaolas/front-end
RUN chmod -R 777 /home/ubuntu/buscaolas/front-end
RUN npm install

RUN npm run build
CMD npm start