package com.smartwarrenty.smartwarrentyportal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class TestController {

    @GetMapping("/hello")
    public String hello() {
        return "Smart Warranty Portal Backend is Working!";
    }
}