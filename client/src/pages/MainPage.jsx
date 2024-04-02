import React, { useEffect, useState } from 'react';

function MainPage() {
   const [tasks, setTasks] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/task/all', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const responseData = await response.json();

                if (response.ok) {
                    const data = responseData.data.map(task => ({
                        id: task.id,
                        name: task.name,
                        items: task.items.map(item => ({
                            completed: item.completed,
                            name: item.name
                        }))
                    }));
                    setTasks(data);
                } else {
                    alert("Problem retrieving data");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
        
    }, []);

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h2>{task.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MainPage;