# Task Manager

Task Manager is a full-stack web application built using the FARM stack (FastAPI, React, and MongoDB) for efficient task management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Task Manager is designed to help users organize and manage their tasks effectively. The backend is powered by FastAPI, the frontend is built with React, and MongoDB is used for data storage.

## Features

- Create, read, update, and delete tasks
- User authentication and authorization
- Responsive design for mobile and desktop
- Real-time updates

## Installation

### Prerequisites

- Node.js and npm
- Python 3.7+
- MongoDB

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/Arpit-K-Sharma/Task-Manager.git
    cd Task-Manager/backend
    ```

2. Create and activate a virtual environment:
    ```sh
    python -m venv venv
    source venv/bin/activate   # On Windows use `venv\Scripts\activate`
    ```

3. Install the dependencies:
    ```sh
    pip install -r requirements.txt
    ```

4. Start the FastAPI server:
    ```sh
    uvicorn main:app --reload
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the React development server:
    ```sh
    npm start
    ```

## Usage

1. Ensure MongoDB is running.
2. Start the FastAPI backend server.
3. Start the React frontend development server.
4. Open your browser and navigate to `http://localhost:3000` to use the application.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Arpit K Sharma - [Your Email](mailto:your-email@example.com)

Project Link: [https://github.com/Arpit-K-Sharma/Task-Manager](https://github.com/Arpit-K-Sharma/Task-Manager)
