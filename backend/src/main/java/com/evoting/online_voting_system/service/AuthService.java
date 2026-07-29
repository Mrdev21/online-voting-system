package com.evoting.online_voting_system.service;

import com.evoting.online_voting_system.dto.LoginRequest;
import com.evoting.online_voting_system.dto.LoginResponse;
import com.evoting.online_voting_system.dto.RegisterRequest;
import com.evoting.online_voting_system.entity.Role;
import com.evoting.online_voting_system.entity.User;
import com.evoting.online_voting_system.exception.EmailAlreadyExistsException;
import com.evoting.online_voting_system.exception.InvalidCredentialsException;
import com.evoting.online_voting_system.repository.UserRepository;
import com.evoting.online_voting_system.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private NotificationService notificationService;

    public User registerUser(RegisterRequest request){

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new EmailAlreadyExistsException("Email already registered");
        }

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.VOTER);
        user.setHasVoted(false);

        User savedUser = userRepository.save(user);

        notificationService.create(
                savedUser.getFullName() + " registered successfully",
                "USER"
        );

        return savedUser;


    }

    public LoginResponse loginUser(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new InvalidCredentialsException("Invalid Email or Password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid Email or Password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(
                token,
                user.getRole().name(),
                "Login Successful"
        );

    }


}