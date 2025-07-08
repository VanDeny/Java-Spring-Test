package com.example.todo.service.TodoApplication;

import com.example.todo.model.Todo;

public class ReturnPatchValue {
    public Todo todo;
    public Boolean failed;

    public ReturnPatchValue(Todo todo) {
        this.todo = todo;
    }

    public ReturnPatchValue() {
        this.failed = true;
    }
}
