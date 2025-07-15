import {Todo} from "../model/todo.model";
import {TodoViewProps} from "../model/add-todo.props.model";

export default function todoView(todos: Todo[], callback: TodoViewProps) {

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
        const dateFormated = item.date ? new Date(item.date).toLocaleDateString('cs-Cz', options) : null;
        return (<li key={item.id} onClick={() => callback.openModal(item.id)}>
            <div>{item.text}</div>
            <div>{dateFormated}</div>
            <div>{item.done}</div>
            <button>Edit</button>
            <button type='submit' onClick={(e) => {
                e.stopPropagation();
                deleteTodo(item.id);
            }}>Delete</button>
        </li>)
    })
}
