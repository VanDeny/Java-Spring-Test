import React, {useEffect, useState} from 'react';
import todoView from "../../service/todoView.service";
import AddTodo from "../todo/add-todo";
import Modal from "react-modal";

export default function TodoList() {
    const [todoList, setTodoList] = useState<{id: string, todo: string, done: boolean ,date: string}[]>([]);
    const [modalIsOpen, setIsOpen] = useState(false);


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


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const todos = todoView(todoList, {refreshTodos: refreshTodos, openModal: openModal});

    return (
        <div>
            <AddTodo callback={refreshTodos}/>
            <button onClick={cons}>Test</button>
            <ul>
                { todos }
            </ul>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input value={}/>
                        <input value={}/>
                        <input value={}/>
                    </form>
                </Modal>
            </div>
        </div>
    )
}