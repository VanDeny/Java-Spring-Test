package com.example.demo.todo.controller;

import com.example.demo.todo.model.Todo;
import com.example.demo.todo.service.TodoApplication.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoController {

    private final TodoService todoService = new TodoService();

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @PostMapping
    public Boolean createTask(@RequestBody Todo todoApplication) {
        return todoService.addTodo(todoApplication);
    }

    @DeleteMapping
    public Boolean deleteTask(@RequestBody String id) {
        return todoService.removeTodo(id);
    }
}
