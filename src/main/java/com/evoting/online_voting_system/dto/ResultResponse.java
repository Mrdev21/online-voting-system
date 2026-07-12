package com.evoting.online_voting_system.dto;

public class ResultResponse {

    private String candidateName;
    private String party;
    private Long votes;

    public ResultResponse() {
    }

    public ResultResponse(String candidateName, String party, Long votes) {
        this.candidateName = candidateName;
        this.party = party;
        this.votes = votes;
    }

    public String getCandidateName() {
        return candidateName;
    }

    public void setCandidateName(String candidateName) {
        this.candidateName = candidateName;
    }

    public String getParty() {
        return party;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public Long getVotes() {
        return votes;
    }

    public void setVotes(Long votes) {
        this.votes = votes;
    }
}