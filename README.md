# Vacation API

This project is a serverless API for managing vacation plans. It uses Node.js, Express, and MongoDB to provide a RESTful API for creating, reading, updating, and deleting vacation plans.

## Features

- **Serverless Architecture**: The API is deployed as serverless functions on Netlify, allowing for scalable and cost-effective hosting.
- **MongoDB Integration**: The API connects to a MongoDB database to store and retrieve vacation plan data.
- **Express Framework**: The API is built using the Express.js framework, which provides a robust set of features for web and mobile applications.
- **CORS Support**: The API includes CORS middleware to handle cross-origin requests, allowing frontend applications to interact with the API.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- A MongoDB database (e.g., MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/felipelf00/vacation-api.git

   ```

2. Navigate to the project directory and install dependencies:

   ```bash
   cd vacation-api
   npm install
   ```

3. Set up your environment variables in a .env file:

   ```bash
   MONGODB_URI=your_mongodb_connection_string

   ```

4. To run a local development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### GET /plans

Retrieves a list of all vacation plans.

### POST /plans

Creates a new vacation plan.

### GET /plans/:id

Retrieves a specific vacation plan by its ID.

### PUT /plans/:id

Updates a specific vacation plan by its ID.

### DELETE /plans/:id

Deletes a specific vacation plan by its ID.
