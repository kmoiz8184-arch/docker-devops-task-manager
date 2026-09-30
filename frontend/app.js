async function loadTasks() {

    const response = await fetch("/api/tasks");

    const tasks = await response.json();

    const container = document.getElementById("tasks");

    container.innerHTML = "";

    tasks.forEach(task => {

        const div = document.createElement("div");

        div.className = "task";

        div.innerHTML = `
            <h3>${task.title}</h3>

            <p>${task.description || ""}</p>

            <p class="status">
                Status: ${task.status}
            </p>

            <button onclick="updateTask(${task.id}, 'In Progress')">
                In Progress
            </button>

            <button onclick="updateTask(${task.id}, 'Completed')">
                Complete
            </button>

            <button
                class="delete"
                onclick="deleteTask(${task.id})"
            >
                Delete
            </button>
        `;

        container.appendChild(div);
    });
}

async function createTask() {

    const title = document.getElementById("title").value;

    const description =
        document.getElementById("description").value;

    if (!title) {
        alert("Please enter task title");
        return;
    }

    await fetch("/api/tasks", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title,
            description
        })
    });

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

    loadTasks();
}

async function updateTask(id, status) {

    await fetch(`/api/tasks/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            status
        })
    });

    loadTasks();
}

async function deleteTask(id) {

    await fetch(`/api/tasks/${id}`, {
        method: "DELETE"
    });

    loadTasks();
}

loadTasks();