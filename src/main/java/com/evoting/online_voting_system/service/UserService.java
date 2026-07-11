package com.evoting.online_voting_system.service;

import com.evoting.online_voting_system.entity.User;
import com.evoting.online_voting_system.exception.UserNotFoundException;
import com.evoting.online_voting_system.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.evoting.online_voting_system.security.JwtService;



@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;




    public List<User> getAllUsers() {
        return userRepository.findAll();
    }



    public User getUserById(Long id) {

        return userRepository.findById(id)
                .orElseThrow(() ->
                        new UserNotFoundException("User not found with id : " + id));

    }


    public User updateUser(Long id, User updatedUser) {

        User existingUser = userRepository.findById(id)
                .orElseThrow(() ->
                        new UserNotFoundException("User not found with id : " + id));

        existingUser.setFullName(updatedUser.getFullName());
        existingUser.setEmail(updatedUser.getEmail());
//        existingUser.setPassword(updatedUser.getPassword());
        existingUser.setRole(updatedUser.getRole());

        return userRepository.save(existingUser);
    }

    public void deleteUser(Long id) {

        User existingUser = userRepository.findById(id)
                .orElseThrow(() ->
                        new UserNotFoundException("User not found with id : " + id));

        userRepository.delete(existingUser);

    }



}