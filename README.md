# ChatF7D

ChatF7D is a chat application built with Framework7 and React on the frontend, and FastAPI on the backend. This project demonstrates a simple chat interface where users can receive an initial greeting from the server and send messages which the server acknowledges.

## Features

- React with Framework7 for the frontend UI.
- FastAPI backend with CORS setup for handling API requests.
- Docker integration for easy setup and deployment.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Docker and Docker Compose are installed on your machine.
- Node.js and npm are installed for handling JavaScript dependencies and scripts.

## Installation

To install ChatF7D, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/chigwell/ChatF7D.git
   cd ChatF7D
   ```

2. Build the Docker containers:
   ```bash
   docker compose build
   ```

## Usage

To use ChatF7D, follow these steps:

1. Run the Docker environment:
   ```bash
   docker compose up
   ```

   This command starts both the frontend and backend services. The frontend can be accessed at `http://localhost:3000`, and the backend will be available at `http://localhost:80`.

2. To stop the application, use:
   ```bash
   docker compose down
   ```

## API Endpoints

- `GET /messages`: Returns the initial message from the server.
- `POST /send-message`: Accepts a message and returns a response acknowledging the received message.

## Development

For development, you can mount your source directories to the Docker containers to make the files live-reload as you develop:

- Frontend React files are located in `./frontend/src`
- Backend FastAPI files are located in `./backend/app`

## Contributing

Contributions to the ChatF7D project are welcome. Please note the following guidelines before submitting your pull request:

- Follow coding style and standards.
- Update the README.md with details of changes to the interface or environment setup.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, please open an issue in the GitHub repository.
