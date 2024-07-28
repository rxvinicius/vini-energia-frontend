FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Production environment
ARG GRAPHQL_URI=https://clarke-energia-backend-8da448044f10.herokuapp.com
ENV GRAPHQL_URI=${GRAPHQL_URI}

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
