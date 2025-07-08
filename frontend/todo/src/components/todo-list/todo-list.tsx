import React, {useEffect, useState} from 'react';
import todoView from "../../service/todoView.service";
import AddTodo from "../todo/add-todo";

export default function TodoList() {
    const [todoList, setTodoList] = useState<{id: string, todo: string, done: boolean ,date: string}[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/todo')
            .then(res => res.json())
            .then(data => setTodoList(data));
    }, []);

    const refreshTodos = () => {
        fetch('http://localhost:8080/todo')
            .then(res => res.json())
            .then(data => setTodoList(data));
    };

    function cons() {
        console.log(todoList);
    }

    const todos = todoView(todoList, refreshTodos);

    return (
        <div>
            <AddTodo callback={refreshTodos}/>
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