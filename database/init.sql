CREATE DATABASE IF NOT EXISTS taskmanager;

USE taskmanager;

CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (title, description, status)
VALUES
(
    'Learn Docker',
    'Learn Docker containers and images',
    'Completed'
),
(
    'Build CI/CD Pipeline',
    'Create GitHub Actions workflow',
    'In Progress'
),
(
    'Deploy Application',
    'Deploy Docker application',
    'Pending'
);