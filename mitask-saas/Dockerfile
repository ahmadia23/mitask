# Use the Node.js 18 image from Docker Hub as the base image
FROM node:18-alpine

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the Docker container
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application inside the container
RUN npm run build

# Expose the port that Next.js runs on
EXPOSE 3000

# Command to start the Next.js application
CMD ["npm", "run", "dev"]
