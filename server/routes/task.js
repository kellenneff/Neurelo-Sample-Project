const express = require('express')
const router = express.Router()
const { getAllTasks, getTaskById } = require('../query/task')

router.get("/task/all", async function (req, res, next) {
    try {
        const [tasks, error] = await getAllTasks();

        if (tasks) {
            res.json(tasks["data"]);
        } else {
            res.status(401).json({ message: error.message || "Error fetching tasks" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message || "Error fetching tasks" });
    }
});

router.get('/task/:id', async function (req, res, next) {
    try {
        id = req.params.id;
        console.log(id)
        const task = await getTaskById(id);
        if (task) {
            console.log(task["data"]);
            res.json(task["data"]);
        } else {
            res.status(401).json({ message: error.message || "Error fetching tasks" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message || "Error fetching tasks" });
    }
});

module.exports = router;

