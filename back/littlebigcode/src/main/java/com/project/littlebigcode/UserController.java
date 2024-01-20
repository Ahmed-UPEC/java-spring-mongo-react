package com.project.littlebigcode;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(path = "/api/v1/user")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class UserController {
    
    private final UserService userService;

    @GetMapping(path = "/all")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping(path = "/user-info")
    public List<User> getUserInfo(@RequestParam("id") String id) {
        Optional<User> userOptional = userService.getUserInfo(id);
        return userOptional.map(Collections::singletonList).orElse(Collections.emptyList());
    }

}
