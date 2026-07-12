package com.evoting.online_voting_system.controller;

import com.evoting.online_voting_system.dto.LoginRequest;
import com.evoting.online_voting_system.dto.LoginResponse;
import com.evoting.online_voting_system.dto.RegisterRequest;
import com.evoting.online_voting_system.entity.User;
import com.evoting.online_voting_system.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User registerUser(@Valid @RequestBody RegisterRequest request) {
        return authService.registerUser(request);
    }

    @PostMapping("/login")
    public LoginResponse loginUser(@Valid @RequestBody LoginRequest request) {
        return authService.loginUser(request);
    }
}