package com.example.demo.todo.service.TodoApplication;

import com.example.demo.todo.model.Todo;

import java.util.ArrayList;
import java.util.List;

public class TodoService {

    private final List<Todo> todo = new ArrayList<>();

    public List<Todo> getAllTodos() {
        return todo;
    }

    public Boolean addTodo(Todo todoToAdd) {
        return todo.add(todoToAdd);
    }

    public Boolean removeTodo(String id) {
        return todo.removeIf(todo -> todo.getId().equals(id));
    }
}
