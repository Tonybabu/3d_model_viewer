# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


3D File Converter & Viewer

This project allows users to convert 3D files between STL and OBJ formats and render them interactively.

Project Structure:

backend/: Flask backend for file conversion

frontend/: React (Vite) + Tailwind for UI and 3D rendering

Setup Instructions:

Clone the repository

Setup & Run Backend:

Navigate to backend folder

Create a virtual environment and activate it

Install dependencies using pip install -r requirements.txt

Run the Flask server with python app.py

Setup & Run Frontend:

Navigate to frontend folder

Install dependencies using npm install

Start the development server with npm run dev

Features:

Convert STL ↔ OBJ using Flask

View 3D models in React with Three.js

Zoom, Rotate, and Pan functionality

Tailwind CSS-based responsive UI

API Endpoints:

POST /convert → Upload & convert file

Troubleshooting:

If Flask doesn’t start, install missing packages with pip install flask flask-cors trimesh

If React shows module errors, run npm install

License: MIT License

