export default function todoView(todos: {id: string, todo: string, done: boolean ,date: string}[]) {
    return todos.map(item => {
        return (<li key={item.id}>
            <div>{item.todo}</div>
            <div>{item.date}</div>
            <div>{item.done}</div>
        </li>)
    })
}
