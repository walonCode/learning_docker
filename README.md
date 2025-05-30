# Simple Server Project with Docker

## Description

A simple server application built using Node.js, Express, and MongoDB. The project aims to provided me with basic understanding of docker and how it operates.

## Features

- **Express Framework**: RESTful API development.
- **MongoDB Integration**: Easy database connection and operations.
- **CORS**: Cross-Origin Resource Sharing support for secure data interaction.
- **Nodemon Setup**: Auto-restarts the node application, makes development processes faster and easier.
- **Docker**: Learning how it works and how useful it can be.

## Technologies

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-js-r91?style=for-the-badge&logo=Express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/walonCode/learning_docker.git
    cd learning_docker
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Create a `.env` file:** Copy `mongo.yaml` to `.env` and update the variables with your environment specifics.

## Usage

1. **Start the development server:**

    ```sh
    npm run dev
    ```

2. **Run the application:**

    ```sh
    node index.js
    ```

## Configuration and Environment Variables

The project uses environment variables for MongoDB connection and other settings. Create a `.env` file in the root of the project:

```yaml
# .env example

MONGO_URI=mongodb://yourdbname:port/yourdbname
PORT=3000
```

Refer to `mongo.yaml` for the standard variables.

## Folder Structure

```markdown
.
├── .dockerignore
├── .gitignore
├── Dockerfile
├── index.js
├── mongo.yaml
├── package-lock.json
└── package.json
```

## Authors

- **YOUR NAME** (https://github.com/walonCode) 

## Contribution

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/NewFeature`).
3. Commit your Changes (`git commit -m 'Add some NewFeature'`).
4. Push to the Branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

---