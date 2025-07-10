package com.example.todo.model;

import java.time.LocalDateTime;
import java.util.UUID;

public class Todo {
    private final String id;
    private String text;
    private boolean done;
    private LocalDateTime date;

    public Todo(String text, boolean done) {
        this.id = UUID.randomUUID().toString();
        this.date = LocalDateTime.now();
        this.text = text;
        this.done = done;
    }

    public String getText() {
        return this.text;
    }

    public Boolean getDone() {
        return this.done;
    }

    public String getDate() {
        return this.date.toString();
    }

    public Boolean setTodo(RequestTodo todo) {
        boolean updated = false;
        if (!todo.text().isEmpty()) {
            this.text = todo.text();
            updated = true;
        }
        if (todo.done() != null) {
            this.done = todo.done();
            updated = true;
        }
        if (updated) {
            this.date = LocalDateTime.now();
            return true;
        }
        return false;
    }

    public String getId() {
        return id;
    }
}
