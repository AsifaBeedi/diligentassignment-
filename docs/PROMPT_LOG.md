# Prompt Log — E-Commerce Assessment

Date: 2025-11-10

1) Purpose: Architecture document
Prompt used: Generate a complete technical architecture document for an E-Commerce app (React, Express, Node, MongoDB Atlas) covering system overview, functional & non-functional requirements, diagrams, components, DB schema, API design, state management, sequence diagrams, deployment, and tools used.
Output summary: `docs/ARCHITECTURE.md` — contains system overview, ASCII diagram, API design, sequence flow, and deployment plan.

2) Purpose: Backend codebase
Prompt used: Generate a complete backend codebase in Node.js + Express.js with Product and Cart routes, Mongoose models, controllers, error handling, CORS, config, and package.json.
Output summary: `server/` folder with `package.json`, `.env.example`, `app.js`, `server.js`, models, controllers, routes, and middleware.

3) Purpose: Frontend codebase
Prompt used: Generate a full React.js frontend with Home, ProductDetails, Cart pages, Navbar and ProductCard components, Context API for state, fetch calls to `http://localhost:5000`, and project structure.
Output summary: `client/` folder with `src/` (components, pages, context), `public/index.html`, webpack/babel configs, and styles.

4) Purpose: Submission document
Prompt used: Generate a polished submission document containing project overview, tech stack, system architecture summary, setup instructions (backend/frontend), environment variables, API endpoints table, frontend flow, and state management summary.
Output summary: `docs/SUBMISSION.md` — ready for submission.

Notes:
- All generated code is scaffold-level for assessment purposes. Replace the placeholder `MONGODB_URI` with an actual connection string before running.
- The frontend uses the Context API and localStorage for cart persistence; backend cart persistence is available via `/cart` endpoints.
