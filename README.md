🖼️AI Image Generator
A full-stack AI-powered image generation app built with React, Node.js, Express, and MongoDB, allowing users to generate images from text prompts using the ClipDrop API.
It includes user authentication, credit-based image generation, and a modern UI for managing prompts and viewing results.

🚀 Tech Stack
Frontend: React + TailwindCSS
Backend: Node.js + Express
Database: MongoDB (Mongoose)
AI Service: ClipDrop API - Text to Image
Authentication: JWT (JSON Web Tokens)

ai-image-generator/
│
├── client/                # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── assets/
│   └── package.json
│
├── server/                # Node.js + Express Backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .env.sample            # Environment variable template
├── README.md
└── package.json


⚡️Environment Variables
You need to create a .env file inside the server/ directory.
Here’s a sample .env.sample content with explanations:
# === MongoDB ===
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ai-image-generator
# MongoDB connection string for storing user data, tokens, and credits.

# === JWT ===
JWT_SECRET=your_jwt_secret_here
# Secret key for signing and verifying JWT tokens (used in authentication).

# === AI Image Generation ===
CLIPDROP_API=your_clipdrop_api_key_here
# API key from ClipDrop (https://clipdrop.co/apis) for text-to-image generation.

# === Server Config ===
PORT=4000
# Port on which the backend server runs.

# === CORS / Frontend ===
CLIENT_URL=http://localhost:5173
# Frontend app URL (React) for CORS configuration.

# === Optional ===
NODE_ENV=development
# Set to "production" in deployment environments.


| Method | Endpoint    | Description                  |
| ------ | ----------- | ---------------------------- |
| POST   | `/register` | Register a new user          |
| POST   | `/login`    | Log in existing user         |
| GET    | `/me`       | Fetch logged-in user details |

| Method | Endpoint    | Description                  |
| ------ | ----------- | ---------------------------- |
| POST   | `/register` | Register a new user          |
| POST   | `/login`    | Log in existing user         |
| GET    | `/me`       | Fetch logged-in user details |

🧑‍🎨 Author
Umang Saini
