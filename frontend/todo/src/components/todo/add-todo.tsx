import {useState} from "react";

// @ts-ignore
export default function AddTodo({callback}) {
    const [newTodoText, setNewTodoText] = useState('');
    const [newTodoDone, setNewTodoDone] = useState(false);

    const addNewTodo = (text: string, done: boolean) => {
        console.log(text);
        console.log(done);
        fetch('http://localhost:8080/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: text, done: done})
        })
            .then(response => {
                if (response.ok && callback) {
                    callback();
                } else if (!response.ok) {
                    console.error('ya fucked up');
                }
            })
    }

// @ts-ignore
    const handleChange = (event) => {
        console.log(event);
        setNewTodoText(event.target.value);
    }

    return (
        <div>
            <input type='text' value={newTodoText} onChange={handleChange}/>
            <input type='checkbox' checked={newTodoDone} onChange={() => setNewTodoDone(!newTodoDone)}/>
            <button type='submit' onClick={() => addNewTodo(newTodoText, newTodoDone)}>Add</button>
        </div>
    )
}