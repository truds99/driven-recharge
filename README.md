# Driven Recharge

This project is a Typescript Node.js API for managing mobile phone recharges. It provides a set of features for managing recharge transactions, users, and related operations.

## Features
Recharge Management: Create and read, update, recharge records.
User Management: Handle user-related operations.
Flexible API Endpoints: Access a range of endpoints for performing various operations related to recharges and users.

## Deployment
The API is deployed and accessible at: [Driven Recharge API](https://driven-recharge.onrender.com)

## Architecture
The project's file and folder structure follows a standard architecture with separate layers for controllers, routers, services, repositories, middlewares, and schemas. This structure ensures a clean separation of concerns and makes the project easier to maintain and scale.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
    <img style='margin: 5px;' src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" height="40" alt="TypeScript logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="40" alt="Node.js logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" height="40" alt="Express logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" height="40" alt="PostgreSQL logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Joi-336699?style=for-the-badge&logo=auth0&logoColor=white" height="40" alt="Joi logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Cors-FF6F91?style=for-the-badge&logo=cors&logoColor=white" height="40" alt="Cors logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/HTTP_Status-5D5D5D?style=for-the-badge&logo=http-status&logoColor=white" height="40" alt="HTTP Status logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="40" alt="JavaScript logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/express--async--errors-000000?style=for-the-badge&logo=express&logoColor=white" height="40" alt="express-async-errors logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Dotenv-0A6C14?style=for-the-badge&logo=dotenv&logoColor=white" height="40" alt="Dotenv logo" />
</p>

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/truds99/driven-recharge.git
cd driven-recharge
```

### 2. Install Project Dependencies

```bash
npm install
```

### 3. Set up Environment Variables

```bash
DATABASE_URL=your_database_url
PORT=your_port_number
```

### 4. Compile Typescript Code

```bash
npm run build
```

### 5. Start the server

```bash
npm start
```
Alternatively, if you are actively developing and want to use TypeScript directly without building it manually each time, you can use:

```bash
npm run dev
```

## Usage
Use tools like Postman or cURL to interact with the API endpoints. Make sure your PostgreSQL instance is running and accessible.

## Contributions
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or new features.
