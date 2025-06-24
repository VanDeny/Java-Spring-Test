package com.example.demo.todo.model;

import java.util.Date;
import java.util.UUID;

public class Todo {
    private final String id;
    private String text;
    private boolean done;
    private final Date date;

    public Todo(String text, boolean done) {
        this.id = UUID.randomUUID().toString();
        this.date = new Date();
        this.text = text;
        this.done = done;
    }

    public String getTodo() {
        return this.text;
    }

    public String getId() {
        return id;
    }
}
