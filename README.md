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

download packages in backend and vite-project:

If Flask doesn’t start, install missing packages with -> pip install flask flask-cors trimesh

If React shows module errors, -> run npm install



