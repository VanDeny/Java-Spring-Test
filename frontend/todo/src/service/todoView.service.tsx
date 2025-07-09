export default function todoView(todos: {id: string, todo: string, done: boolean, date: string}[], callback: {refreshTodos: Function, openModal: Function}) {

    const deleteTodo = (id: string) => {
        try {
            fetch('http://localhost:8080/todo/' + id, {method: 'DELETE'})
                .then(res => {
                    if (res.ok) {
                        console.log('Todo deleted');
                        callback.refreshTodos();
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
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'} as Intl.DateTimeFormatOptions;
        const dateFormated = new Date(item.date).toLocaleDateString('cs-Cz', options);
        return (<li key={item.id} onClick={() => callback.openModal()}>
            <div>{item.todo}</div>
            <div>{dateFormated}</div>
            <div>{item.done}</div>
            <button>Edit</button>
            <button type='submit' onClick={() => deleteTodo(item.id)}>Delete</button>
        </li>)
    })
}
