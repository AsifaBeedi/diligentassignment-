# E-Commerce Assessment

Lightweight full-stack E-Commerce sample app for an internship assessment.

Author: Asifa Bandulal Beedi
Department: AIML

## Project structure

- server/ — Express backend, Mongoose models, API routes
- client/ — React frontend (Router + Context API)
- docs/ — architecture, submission doc, prompt log

## Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB Atlas account (or local MongoDB)

## Setup — Backend

1. Copy `.env.example` to `.env` and set `MONGODB_URI`:

   - Example `.env` (replace username/password):

   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.wpqiwor.mongodb.net/ecommerce?retryWrites=true&w=majority
   PORT=5000

2. Install and run:

```powershell
cd "C:/all projects/diligentassignment/server"
npm install
npm run dev
```

## Seed sample products

From the server directory (after setting `.env`):

```powershell
npm run seed
```

This will insert example products into the `products` collection.

## Setup — Frontend

```powershell
cd "C:/all projects/diligentassignment/client"
npm install
npm run start
```

The frontend expects the backend at `http://localhost:5000`.

## Useful commands
- Start backend dev server: `npm run dev` (server)
- Seed DB: `npm run seed` (server)
- Start frontend dev: `npm run start` (client)


