import React, {useEffect, useState} from 'react';
import todoView from "../../service/todoView.service";
import AddTodo from "../todo/add-todo";
import Modal from "react-modal";
import {Todo} from "../../model/todo.model";

export default function TodoList() {
    const [modalIsOpen, setIsOpen] = useState(false);

    const [todo, setTodo] = useState<Todo|null>(null);
    const [todoList, setTodoList] = useState<Todo[]>([]);



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

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    function openModal(id: Todo["id"]) {
        const toEdit = todoList.find(td => td.id === id);
        if (toEdit) {
            setTodo(toEdit);
            setIsOpen(true);
        }
    }

    function closeModal() {
        setIsOpen(false);
        setTodo(null);
    }

    function applyEdit() {
        if (todo) {
            try {
                fetch('http://localhost:8080/todo/' + todo.id, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({text: todo.text, done: todo.done})
                })
                    .then(response => {
                        if (response.ok) {
                            closeModal();
                            refreshTodos();
                        } else if (!response.ok) {
                            console.error('ya fucked up');
                        }
                    })
            } catch (e) {
                console.log('wtf' + e);
            }
        }
    }

    const todos = todoView(todoList, {refreshTodos: refreshTodos, openModal: openModal});

    return (
        <div>
            <AddTodo refreshTodos={refreshTodos}/>
            <button onClick={cons}>Test</button>
            <ul>
                { todos }
            </ul>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <h2>{'Edit Todo'}</h2>
                    <form>
                        <input type='text' value={todo?.text || ''}
                               onChange={(e) => setTodo(prev => prev ? { ...prev, text: e.target.value } : null)
                        }/>
                        <input type='checkbox' checked={todo?.done || false}
                               onChange={(e) => setTodo(prev => prev ? { ...prev, done: e.target.checked } : null)
                        }/>
                    </form>
                    <button onClick={applyEdit}>Apply</button>
                    <button onClick={closeModal}>Close</button>
                </Modal>
            </div>
        </div>
    )
}