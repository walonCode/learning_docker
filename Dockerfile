FROM node:23-slim

# Environment variables (used at runtime, not build)
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

# Set working directory
WORKDIR /home/app

# Copy project files into container
COPY . .

# Install dependencies if package.json exists
RUN if [ -f package.json ]; then npm install; fi

# Start the app
CMD ["node", "/home/app/index.js"]
