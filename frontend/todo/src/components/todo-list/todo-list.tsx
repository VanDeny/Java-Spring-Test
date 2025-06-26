import React, {useEffect, useState} from 'react';
import todoView from "../../service/todoView.service";

export default function TodoList() {
    const [todoList, setTodoList] = useState<{id: string, todo: string, done: boolean ,date: string}[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/todo')
            .then(async (res) => setTodoList([...todoList, await res.json()]))
    }, []);

    function cons() {
        console.log(todoList);
    }

    const todos = todoView(todoList);

    return (
        <div>
            <button onClick={cons}>Test</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda dicta dignissimos dolores
                eaque eius et eum, labore nisi numquam odit porro possimus praesentium quas quidem recusandae unde
                voluptate.</p>
            <ul>
                { todos }
            </ul>

        </div>
    )
}