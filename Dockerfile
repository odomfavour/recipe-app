FROM node:16-alpine as builder

WORKDIR /app

#RUN NODE_OPTIONS="--max-old-space-size=1000"
#ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm i

#Memory heap fix
#RUN npm run build; exit 0
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.23.2-alpine as production

ENV NODE_ENV production
# Add your nginx.conf
# COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


