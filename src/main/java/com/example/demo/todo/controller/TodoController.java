package com.example.demo.todo.controller;

import com.example.demo.todo.model.RequestTodo;
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
