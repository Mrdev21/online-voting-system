package com.evoting.online_voting_system.dto;

public class LoginResponse {

    private String token;
    private String role;
    private String message;

    // No Args Constructor
    public LoginResponse() {
    }

    // All Args Constructor
    public LoginResponse(String token, String role, String message) {
        this.token = token;
        this.role = role;
        this.message = message;
    }

    // Getters and Setters

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}