# Submission Document — E-Commerce Internship Assessment

## 1. Project overview

This repository contains a lightweight E-Commerce web application built for an internship assessment. It demonstrates a full-stack solution with a React frontend and an Express/MongoDB backend. Core functionality includes product listing, viewing product details, and managing a shopping cart.

## 2. Tech stack

- Frontend: React.js, React Router
- Backend: Node.js, Express.js
- Database: MongoDB Atlas (Mongoose)
- State: React Context API
- Build & tooling: Webpack, Babel, nodemon

## 3. System architecture (summary)

- Single-page React app communicates with Express REST API.
- Express handles CRUD for products and basic cart persistence (CartItem documents).
- MongoDB Atlas stores products and cart items.

## 4. Setup instructions

Backend
1. Open terminal in `server/`.
2. Copy `.env.example` to `.env` and set `MONGODB_URI`.
3. Install dependencies: (PowerShell)

```powershell
cd "C:/all projects/diligentassignment/server"; npm install
```

4. Run server (development):

```powershell
npm run dev
```

Frontend
1. Open terminal in `client/`.
2. Install dependencies:

```powershell
cd "C:/all projects/diligentassignment/client"; npm install
```

2. Start dev server:

```powershell
npm run start
```

Environment variables
- `MONGODB_URI` — MongoDB Atlas connection string. Use a user with appropriate permissions. Example format:
  mongodb+srv://<user>:<password>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority

## 5. API endpoints

See `docs/ARCHITECTURE.md` for full API reference. Summary:

- GET /products — list products
- GET /products/:id — product details
- POST /products — create product (admin/seed)
- GET /cart — list cart items
- POST /cart/add — add item to cart
- DELETE /cart/remove/:id — remove cart item

## 6. Frontend flow summary

- Home page fetches `/products` and renders `ProductCard` components.
- Clicking a product navigates to `/product/:id` and fetches details.
- Add to cart uses `CartContext` to update global state and localStorage. Cart page displays items and allows removal.

## 7. State management summary

- `CartContext` (Context API) stores cart array items with structure: { productId, product, quantity }.
- `addItem(product)` adds or increments quantity.
- `removeItem(productId)` removes item.
- State persisted to `localStorage`.

---
