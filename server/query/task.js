const {TaskApiService} = require("neurelo-sdk");
const axios = require('axios');

async function getAllTasks() {
    try {
        const tasks = await TaskApiService.findTask();
        //console.log(tasks);
        return[tasks, null];
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
}

async function getTaskById(id) {
    try {
        const res = await TaskApiService.findTaskById(id);
        if (res.data?.data) {
            return {data: res.data?.data};
        }
        else {
            return {data: undefined, message: "Error fetching task by id"};
        }
    } catch (error) {
        console.error("Error fetching task by id:", error);
        return {
            data: undefined, message: "Error fetching task by id"
        };
        }
    }

async function createTask(data) {
    try {
        const res = await TaskApiService.createTask(
            data?.name,
            {
               items: data?.items
            },
            undefined
        );
        if (res.data?.data) {
            return {data: res.data?.data, message: 'Task created successfully'};
        }
        else {
            return {data: undefined, message: "Error creating task"};
        }
    } catch (error) {
        console.error("Error creating task:", error);
    };
}

async function updateTask(data) {
    try {
        const res = await TaskApiService.updateTaskById(
            data?.id,
            {
                name: data?.name,
                items: data?.items
            },
            undefined
        );
        if (res.data?.data) {
            return {
                data: res.data?.data,
                message: "Task updated successfully"
            };
        } else {
            return{
                data: undefined,
                message: 'Error updating task'
            }
        };
    } catch (error) {
        console.error("Error updating task:", error);
        return {
            data: undefined,
            message: 'Error updating task',
        };
    }
} 


module.exports = {
    getAllTasks,
    getTaskById,
    createTask
}