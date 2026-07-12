package com.evoting.online_voting_system.service;

import com.evoting.online_voting_system.dto.VoteRequest;
import com.evoting.online_voting_system.entity.Vote;
import com.evoting.online_voting_system.exception.AlreadyVotedException;
import com.evoting.online_voting_system.repository.CandidateRepository;
import com.evoting.online_voting_system.repository.UserRepository;
import com.evoting.online_voting_system.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.evoting.online_voting_system.dto.VoteRequest;
import com.evoting.online_voting_system.entity.User;
import com.evoting.online_voting_system.entity.Candidate;
import java.time.LocalDateTime;

@Service
public class VoteService {

    @Autowired
    private VoteRepository voteRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CandidateRepository candidateRepository;

    public Vote castVote(String email, VoteRequest request) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        Candidate candidate = candidateRepository.findById(request.getCandidateId())
                .orElseThrow(() ->
                        new RuntimeException("Candidate not found"));

        if (voteRepository.findByUser(user).isPresent()) {
            throw new AlreadyVotedException("You have already voted");
        }

        Vote vote = new Vote();

        vote.setUser(user);
        vote.setCandidate(candidate);
        vote.setVotedAt(LocalDateTime.now());

        return voteRepository.save(vote);
    }

}