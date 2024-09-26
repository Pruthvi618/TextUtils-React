# Use node 20 Alpine version as base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all files from current directory to container
COPY . .

# Expose port 3000 (React default)
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]
