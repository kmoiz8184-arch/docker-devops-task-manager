🚀 DevOps Task Manager

A complete portfolio-level DevOps project demonstrating a Dockerized full-stack Task Manager application with automated testing, GitHub Actions CI/CD, and Docker Hub image publishing.

🛠️ Technology Stack

HTML

CSS

JavaScript

Node.js

Express

MySQL

Nginx

Docker

Docker Compose

Git

GitHub

GitHub Actions

Docker Hub

Jest

Supertest

🏗️ Architecture

Developer
   |
   | git push
   v
GitHub
   |
   v
GitHub Actions
   |--------------------|
   |                    |
Run Tests          Build Docker
                        |
                        v
                    Docker Hub
                        |
                        v
                  Docker Compose
                  |      |      |
                  v      v      v
                Nginx  Node.js  MySQL

📁 Project Structure

docker-devops-task-manager/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── server.test.js
│
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── database/
│   └── init.sql
│
├── nginx/
│   └── nginx.conf
│
├── .dockerignore
├── .gitignore
├── docker-compose.yml
└── README.md

🎯 Project Features

The application provides:

Task creation

Task listing

Task status updates

Task deletion

MySQL persistence

Backend health endpoint

Nginx reverse proxy

Dockerized frontend

Dockerized backend

MySQL container

Docker Compose orchestration

Automated backend testing

GitHub Actions CI/CD

Docker Hub image publishing

🔌 Backend API

Health Check

GET /api/health

Expected response:

{
  "status": "healthy",
  "database": "connected"
}

Get Tasks

GET /api/tasks

Create Task

POST /api/tasks

Example request:

{
  "title": "Learn Docker",
  "description": "Learn Docker containers and images"
}

Update Task

PUT /api/tasks/:id

Example request:

{
  "status": "Completed"
}

Allowed statuses:

Pending

In Progress

Completed

Delete Task

DELETE /api/tasks/:id

🐳 Run Locally with Docker Compose

Make sure Docker Desktop is installed and running.

From the project root:

docker compose build
docker compose up -d

Check the containers:

docker compose ps

Expected services:

task-manager-db
task-manager-backend
task-manager-frontend

Open the application:

http://localhost:8080

🩺 Check Application Health

Open:

http://localhost:8080/api/health

Expected:

{
  "status": "healthy",
  "database": "connected"
}

📋 Test the Application

Verify these functions:

View existing tasks.

Create a new task.

Change a task to In Progress.

Complete a task.

Delete a task.

Check the API health endpoint.

🔎 Docker Commands

List running containers:

docker ps

View all Compose logs:

docker compose logs

View backend logs:

docker compose logs backend

View database logs:

docker compose logs database

Stop the application:

docker compose down

🐳 Docker Images

Build the backend:

docker build -t YOUR_DOCKERHUB_USERNAME/task-manager-backend:latest ./backend

Build the frontend:

docker build -t YOUR_DOCKERHUB_USERNAME/task-manager-frontend:latest -f frontend/Dockerfile .

Check images:

docker images

Push the backend:

docker push YOUR_DOCKERHUB_USERNAME/task-manager-backend:latest

Push the frontend:

docker push YOUR_DOCKERHUB_USERNAME/task-manager-frontend:latest

Replace YOUR_DOCKERHUB_USERNAME with your actual Docker Hub username.

🔐 GitHub Secrets

In GitHub:

Settings → Secrets and variables → Actions

Add:

DOCKERHUB_USERNAME
DOCKERHUB_TOKEN

DOCKERHUB_TOKEN should contain a Docker Hub Access Token.

Do not store the Docker Hub password directly in GitHub Actions.

⚙️ CI/CD Pipeline

The workflow is stored at:

.github/workflows/ci-cd.yml

A push to the main branch triggers the pipeline.

The pipeline performs:

Checkout repository

Setup Node.js 20

Install backend dependencies

Run automated tests

Authenticate with Docker Hub

Build backend Docker image

Push backend image

Build frontend Docker image

Push frontend image

CI/CD Flow

Push
 ↓
Test Job
 ↓
Tests Pass
 ↓
Docker Job
 ↓
Build Backend
 ↓
Push Backend
 ↓
Build Frontend
 ↓
Push Frontend

🧪 Automated Testing

The backend test is located at:

backend/server.test.js

Run locally:

cd backend
npm install
npm test

The test checks that the health endpoint exists and returns either a successful or database-unavailable response.

📦 Generate package-lock.json

From the backend directory:

cd backend
npm install

This generates:

backend/
├── package.json
├── package-lock.json
├── server.js
├── server.test.js
└── Dockerfile

🌐 Nginx Reverse Proxy

Nginx serves the frontend and forwards API requests to the Node.js backend.

The configuration is stored at:

nginx/nginx.conf

The API proxy target is:

http://backend:3000

This allows the browser to access the frontend and /api/ endpoints through the same public container endpoint.

🗄️ Database

The MySQL database is initialized using:

database/init.sql

The database is named:

taskmanager

The application uses:

DB_HOST=database
DB_USER=taskuser
DB_PASSWORD=taskpassword
DB_NAME=taskmanager

The MySQL data is stored in a Docker volume named:

mysql_data

🔧 Environment Variables

The backend supports:

DB_HOST
DB_USER
DB_PASSWORD
DB_NAME
PORT

Docker Compose supplies the database connection values to the backend container.

🔄 GitHub Setup

Create a GitHub repository named:

docker-devops-task-manager

Then:

cd C:\devops-task-manager

git init
git branch -M main

git add .

git commit -m "Initial Dockerized Task Manager"

git remote add origin YOUR_GITHUB_REPOSITORY_URL

git push -u origin main

Replace YOUR_GITHUB_REPOSITORY_URL with your actual repository URL.

🧹 Git Ignore Files

.gitignore:

node_modules/
.env
.env.*
*.log
.DS_Store

.dockerignore:

.git
.github
node_modules
*.log
README.md

🧠 DevOps Skills Demonstrated

Beginner Docker

Docker images

Docker containers

Dockerfile

Port mapping

Volumes

Docker networks

Intermediate Docker

Docker Compose

Multi-container applications

Healthchecks

Environment variables

Reverse proxy

DevOps

Git

GitHub

GitHub Actions

CI/CD

Automated testing

Docker Hub

Secrets

Image versioning

🎓 Portfolio Value

This project demonstrates how a developer can move from source code to a containerized application and then automate testing and image publishing through CI/CD.

It combines:

Frontend
   +
Backend
   +
Database
   +
Nginx
   +
Docker
   +
Docker Compose
   +
GitHub
   +
GitHub Actions
   +
Docker Hub

🚀 Future Stage — Terraform + Azure

The same project can be extended into a cloud deployment:

Developer
    ↓
GitHub
    ↓
GitHub Actions
    ↓
Docker Hub
    ↓
Terraform
    ↓
Azure
    ↓
Linux VM
    ↓
Docker Compose
    ↓
Application

The next stage can demonstrate:

Terraform infrastructure as code

Azure deployment

Linux VM

Docker Compose deployment

Cloud networking

Automated infrastructure provisioning

🏁 Final Goal

The completed portfolio can demonstrate:

Docker
+
GitHub
+
GitHub Actions
+
CI/CD
+
Docker Hub
+
Terraform
+
Azure

This makes the project a practical end-to-end DevOps portfolio project.
