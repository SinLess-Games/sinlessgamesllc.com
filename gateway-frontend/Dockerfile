# FROM node:19.0.0-buster
# ENV NODE_ENV production
# Add a work directory
# WORKDIR /app
# Cache and Install dependencies
# COPY package.json .
# COPY package-lock.json .
# RUN npm install
# Copy app files
# COPY . .
# Build the app
# RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.23.3-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY public.pem /etc/ssl/cert.pem
COPY priv.key /etc/ssl/priv.key
# Expose port
EXPOSE 9080
EXPOSE 7443
# Start nginx
CMD ["nginx", "-g", "daemon off;"]