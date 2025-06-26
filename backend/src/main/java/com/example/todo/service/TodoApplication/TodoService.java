package com.example.todo.service.TodoApplication;

import com.example.todo.model.RequestTodo;
import com.example.todo.model.Todo;

import java.util.ArrayList;
import java.util.List;

public class TodoService {

    private final List<Todo> todo = new ArrayList<>();

    public List<Todo> getAllTodos() {
        return todo;
    }

    public Boolean addTodo(RequestTodo todoToAdd) {
        return todo.add(new Todo(todoToAdd.text(), todoToAdd.done()));
    }

    public Todo getTodoById(String id) {
        return todo.stream().filter(t -> t.getId().equals(id)).findFirst().orElse(null);
    }

    public Todo updateTodoById(String id, RequestTodo todoToUpdate) {
        Todo tmp = todo.stream().filter(t -> t.getId().equals(id)).findFirst().orElse(null);
        if (tmp != null) {
            boolean updated = tmp.setTodo(todoToUpdate);
            if (updated) {
                return tmp;
            }
        }
        return tmp;
    }

    public Boolean removeTodo(String id) {
        return todo.removeIf(todo -> todo.getId().equals(id));
    }
}
