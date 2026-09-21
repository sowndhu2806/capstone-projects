package com.smartwarrenty.smartwarrentyportal.controller;

import com.smartwarrenty.smartwarrentyportal.User;
import com.smartwarrenty.smartwarrentyportal.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {

        List<User> existingUsers = userRepository.findByEmail(user.getEmail());

        if (!existingUsers.isEmpty()) {
            return existingUsers.get(0);
        }

        return userRepository.save(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {

        List<User> users = userRepository.findByEmail(user.getEmail());

        if (users.isEmpty()) {
            return "User not found";
        }

        for (User existingUser : users) {

            if (existingUser.getPassword().equals(user.getPassword())) {
                return "Login successful!";
            }
        }

        return "Invalid password";
    }
}