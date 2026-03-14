# Project Overview

This is a simple Todo web application with a Node.js/Express backend and a plain HTML/JS frontend.

## Structure

```
backend/        # Express REST API (Node.js)
  server.js     # Entry point, all routes defined here
  package.json
frontend/
  index.html    # Single-page UI, no build step required
  app.js        # Frontend logic (fetch, render, event handlers)
```

## Running the App

```bash
# Install and start the backend
cd backend && npm install && npm start
# Backend runs at http://localhost:3000

# Open the frontend directly in a browser
open frontend/index.html
```

## Tech Stack

- Backend: Node.js, Express 4, cors middleware
- Frontend: Vanilla HTML + CSS + JavaScript (no framework, no bundler)
- Storage: In-memory array (resets on server restart)
