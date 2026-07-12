package com.evoting.online_voting_system.dto;

public class LoginResponse {

    private String token;
    private String message;

    // No Args Constructor
    public LoginResponse() {
    }

    // All Args Constructor
    public LoginResponse(String token, String message) {
        this.token = token;
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
}