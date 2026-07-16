package com.evoting.online_voting_system.service;

import com.evoting.online_voting_system.dto.DashboardStatsResponse;
import com.evoting.online_voting_system.repository.CandidateRepository;
import com.evoting.online_voting_system.repository.UserRepository;
import com.evoting.online_voting_system.repository.VoteRepository;
import org.springframework.stereotype.Service;
import com.evoting.online_voting_system.repository.ElectionRepository;

@Service
public class DashboardService {

    private final UserRepository userRepository;
    private final CandidateRepository candidateRepository;
    private final VoteRepository voteRepository;
    private final ElectionRepository electionRepository;


    public DashboardService(
            UserRepository userRepository,
            CandidateRepository candidateRepository,
            VoteRepository voteRepository,
            ElectionRepository electionRepository) {

        this.userRepository = userRepository;
        this.candidateRepository = candidateRepository;
        this.voteRepository = voteRepository;
        this.electionRepository = electionRepository;
    }

    public DashboardStatsResponse getDashboardStats() {

        return new DashboardStatsResponse(
                userRepository.count(),
                candidateRepository.count(),
                voteRepository.count(),
                electionRepository.count()
        );
    }
}