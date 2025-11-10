# E-Commerce Web Application — Technical Architecture

## System overview

This project is a lightweight E-Commerce web application intended for an internship assessment. It provides product listing, product details, cart management, and a REST API between a React frontend and an Express backend. MongoDB Atlas is used as the persistent datastore.

Key goals:
- Clean, responsive UI
- Lightweight backend for CRUD
- Clear separation between frontend and backend via REST
- Simple global state for cart using Context API

## Functional requirements

1. List all products
2. View product details
3. Manage a shopping cart (add/remove)
4. Basic state management (Context API)
5. Clean & responsive UI
6. Lightweight backend for CRUD operations (products & cart)
7. REST API between frontend and backend

## Non-functional requirements

- Performance: Load product list within 1 second on typical broadband.
- Security: No authentication required for assessment; use CORS and input validation.
- Maintainability: Modular code (controllers, routes, models).
- Scalability: Stateless API servers; MongoDB Atlas handles data scale.
- Reliability: Error handling middleware returns consistent JSON responses.

## System architecture diagram (ASCII)

Client (React) <--> REST API (Express) <--> MongoDB Atlas

ASCII:

  [Browser / React SPA]
        |
        | HTTP (JSON)
        v
  [Express.js API Server]
    |         |
    |         +--> Error handling, CORS
    v
  [MongoDB Atlas (Products, CartItems)]

## Component breakdown

Frontend modules
- Pages:
  - Home (product list)
  - ProductDetails
  - Cart
- Components:
  - Navbar
  - ProductCard
- Context:
  - CartContext (global cart state with add/remove)

Backend modules
- server.js — app entry, DB connection
- app.js — express app, global middleware
- config/ — environment and config (example .env provided)
- models/ — Mongoose models (Product, CartItem)
- controllers/ — business logic for products and cart
- routes/ — express routes
- middleware/ — error handling

## Database schema

Product
- _id: ObjectId
- name: string
- price: number
- image: string (URL)
- description: string

CartItem
- _id: ObjectId
- productId: ObjectId (ref Product)
- quantity: number

## API design

Base URL: http://localhost:5000

Products
- GET /products
  - Response: { success: true, data: [Product] }

- GET /products/:id
  - Response: { success: true, data: Product }

- POST /products
  - Body: { name, price, image, description }
  - Response: { success: true, data: Product }

Cart
- GET /cart
  - Response: { success: true, data: [CartItem with populated product] }

- POST /cart/add
  - Body: { productId, quantity }
  - Response: { success: true, data: CartItem }

- DELETE /cart/remove/:id
  - Response: { success: true, data: removedCartItem }

Errors
- All errors return { success: false, message }

## State management flow

- CartContext stores array of items: { productId, product, quantity }
- Actions: addItem(product) — increment existing item or add new; removeItem(productId)
- Cart persisted to localStorage to survive reloads

## Sequence diagrams (text)

Add to cart
1. User clicks Add (React) -> CartContext.addItem()
2. CartContext updates local state and localStorage
3. (Optional) Frontend may POST to /cart/add to persist server-side

Fetch products
1. Home mounts -> fetch GET /products
2. Server responds with JSON array
3. Home renders ProductCard list

## Deployment plan

Local
- Backend: set MONGODB_URI in `.env`, run `npm install` then `npm run dev` in `server/`.
- Frontend: run `npm install` then `npm run start` in `client/`.

Production
- Build frontend (`npm run build`) and serve via static host (Netlify, Vercel) or serve `dist` from a small static server.
- Deploy backend to Heroku / Render / Azure App Service and set environment variables.
- Use managed MongoDB Atlas with production user and IP allowlist.

## Tools used

- Frontend: React, React Router
- Backend: Node.js, Express.js
- Database: MongoDB Atlas, Mongoose
- Dev: Webpack, Babel, nodemon
- Other: CORS, dotenv

---
