export default function todoView(todos: {id: string, todo: string, done: boolean, date: string}[], callback: Function) {


    const deleteTodo = (id: string) => {
        try {
            fetch('http://localhost:8080/todo/' + id, {method: 'DELETE'})
                .then(res => {
                    if (res.ok) {
                        console.log('Todo deleted');
                        callback();
                    } else {
                        console.log('Delete failed');
                    }
                })
        }
        catch (e) {
            console.log('wtf' + e);
        }
    }

    return todos.map(item => {
        return (<li key={item.id}>
            <div>{item.todo}</div>
            <div>{item.date}</div>
            <div>{item.done}</div>
            <button>Edit</button>
            <button type='submit' onClick={() => deleteTodo(item.id)}>Delete</button>
        </li>)
    })
}
