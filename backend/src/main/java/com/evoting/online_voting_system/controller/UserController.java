package com.evoting.online_voting_system.controller;

import com.evoting.online_voting_system.dto.UserProfileUpdateRequest;
import com.evoting.online_voting_system.entity.User;
import com.evoting.online_voting_system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }


    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {

        System.out.println("ID = " + id);

        return userService.getUserById(id);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        return userService.updateUser(id, updatedUser);
    }


    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {

        userService.deleteUser(id);

        return "User deleted successfully";

    }

    @GetMapping("/me")
    public User getCurrentUser(Authentication authentication) {

        return userService.getCurrentUser(authentication.getName());

    }

    @PutMapping("/me")
    public User updateCurrentUser(
            Authentication authentication,
            @RequestBody UserProfileUpdateRequest request) {

        System.out.println("DTO Photo = " + request.getProfilePhoto());

        return userService.updateCurrentUser(
                authentication.getName(),
                request);
    }



}