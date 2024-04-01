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
        console.error("Error teching task by id:", error);
        return {
            data: undefined, message: "Error fetching task by id"
        };
        }
    }


module.exports = {
    getAllTasks,
    getTaskById
}