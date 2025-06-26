package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/home")
public class DefaultController {

    @GetMapping
    public String getAllUsers() {
        return "fuck yeah";
    }

    @PostMapping
    public String createUser() {
        return "lets gooo";
    }
}
