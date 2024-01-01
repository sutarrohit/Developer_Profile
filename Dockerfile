# Stage 1: Base image for installing dependencies
FROM node:21 as base 
WORKDIR /app
COPY package.json ./
RUN npm install

# Stage 2: Development stage
FROM base as development
COPY . . 
CMD [ "npm","run", "dev" ]


# Stage 3: Production stage
FROM base as production
COPY . .
RUN npm run build
RUN npm prune -- production   
CMD [ "npm","run", "start" ]