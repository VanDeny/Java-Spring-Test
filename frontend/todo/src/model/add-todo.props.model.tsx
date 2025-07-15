export type AddTodoProps = {
    refreshTodos: () => void;
};

export type TodoViewProps = {
    refreshTodos: () => void;
    openModal: (id: string) => void;
};