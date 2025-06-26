package com.example.todo.controller;

import com.example.todo.model.RequestTodo;
import com.example.todo.model.Todo;
import com.example.todo.service.TodoApplication.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/todo")
public class TodoController {

    private final TodoService todoService = new TodoService();

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @GetMapping("/{id}")
    public Todo getTodoById(@PathVariable String id) {
        return todoService.getTodoById(id);
    }

    @PostMapping
    public Boolean createTask(@RequestBody RequestTodo todoApplication) {
        return todoService.addTodo(todoApplication);
    }

    @PatchMapping("/{id}")
    public Todo updateTodo(@PathVariable String id, @RequestBody RequestTodo todo) {
        return todoService.updateTodoById(id, todo);
    }

    @DeleteMapping("/{id}")
    public Boolean deleteTask(@PathVariable String id) {
        return todoService.removeTodo(id);
    }
}
