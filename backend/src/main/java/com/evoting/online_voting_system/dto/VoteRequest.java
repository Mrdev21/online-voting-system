package com.evoting.online_voting_system.dto;

public class VoteRequest {

    private Long candidateId;

    public VoteRequest() {
    }

    public VoteRequest(Long candidateId) {
        this.candidateId = candidateId;
    }

    public Long getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(Long candidateId) {
        this.candidateId = candidateId;
    }
}