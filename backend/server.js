const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

app.use(cors());
app.use(express.json());

const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "taskuser",
    password: process.env.DB_PASSWORD || "taskpassword",
    database: process.env.DB_NAME || "taskmanager"
};

let pool;

function getPool() {
    if (!pool) {
        pool = mysql.createPool(dbConfig);
    }

    return pool;
}

app.get("/api/health", async (req, res) => {
    try {
        await getPool().query("SELECT 1");

        res.json({
            status: "healthy",
            database: "connected"
        });
    } catch (error) {
        res.status(500).json({
            status: "unhealthy",
            database: "disconnected"
        });
    }
});

app.get("/api/tasks", async (req, res) => {
    try {
        const [rows] = await getPool().query(
            "SELECT * FROM tasks ORDER BY id DESC"
        );

        res.json(rows);
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch tasks"
        });
    }
});

app.post("/api/tasks", async (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    try {
        const [result] = await getPool().query(
            "INSERT INTO tasks (title, description) VALUES (?, ?)",
            [title, description || ""]
        );

        res.status(201).json({
            id: result.insertId,
            title,
            description: description || "",
            status: "Pending"
        });
    } catch (error) {
        res.status(500).json({
            error: "Failed to create task"
        });
    }
});

app.put("/api/tasks/:id", async (req, res) => {
    const { status } = req.body;

    const allowedStatuses = [
        "Pending",
        "In Progress",
        "Completed"
    ];

    if (!allowedStatuses.includes(status)) {
        return res.status(400).json({
            error: "Invalid status"
        });
    }

    try {
        await getPool().query(
            "UPDATE tasks SET status = ? WHERE id = ?",
            [status, req.params.id]
        );

        res.json({
            message: "Task updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: "Failed to update task"
        });
    }
});

app.delete("/api/tasks/:id", async (req, res) => {
    try {
        await getPool().query(
            "DELETE FROM tasks WHERE id = ?",
            [req.params.id]
        );

        res.json({
            message: "Task deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: "Failed to delete task"
        });
    }
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`API running on port ${PORT}`);
    });
}

module.exports = app;