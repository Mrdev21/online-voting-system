package com.evoting.online_voting_system.dto;

public class DashboardStatsResponse {

    private long totalUsers;
    private long totalCandidates;
    private long totalVotes;
    private long activeElections;

    public DashboardStatsResponse() {
    }

    public DashboardStatsResponse(long totalUsers,
                                  long totalCandidates,
                                  long totalVotes,
                                  long activeElections) {
        this.totalUsers = totalUsers;
        this.totalCandidates = totalCandidates;
        this.totalVotes = totalVotes;
        this.activeElections = activeElections;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getTotalCandidates() {
        return totalCandidates;
    }

    public void setTotalCandidates(long totalCandidates) {
        this.totalCandidates = totalCandidates;
    }

    public long getTotalVotes() {
        return totalVotes;
    }

    public void setTotalVotes(long totalVotes) {
        this.totalVotes = totalVotes;
    }

    public long getActiveElections() {
        return activeElections;
    }

    public void setActiveElections(long activeElections) {
        this.activeElections = activeElections;
    }
}