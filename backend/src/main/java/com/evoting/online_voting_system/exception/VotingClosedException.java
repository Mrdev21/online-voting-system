package com.evoting.online_voting_system.exception;

public class VotingClosedException extends RuntimeException {

    public VotingClosedException(String message) {
        super(message);
    }
}