const express = require('express')
const router = express.Router()
const taskQuery = require('../query/task')

router.get("/task/all", async function (req, res, next) {
    try {
        const [tasks, error] = await taskQuery.getAllTasks();

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
        const task = await taskQuery.getTaskById(id);
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

router.post('/task/create', async function (req, res, next) {
    const data = await taskQuery.createTask(req.body);
    res.json(data);
})

router.put('task/update/:id', async function (req, res, next) {
    const data = await taskQuery.updateTask(req.body);
    res.json(data);
});

router.delete('task/delete/:id', async function (req, res, next) {
    const data = await taskQuery.deleteTask(req.params.id);
    res.json(data);
})



module.exports = router;

