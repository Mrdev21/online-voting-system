package com.evoting.online_voting_system.service;


import com.evoting.online_voting_system.entity.Election;
import com.evoting.online_voting_system.entity.ElectionStatus;
import com.evoting.online_voting_system.exception.VotingClosedException;
import com.evoting.online_voting_system.repository.ElectionRepository;
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

    @Autowired
    private ElectionRepository electionRepository;

    @Autowired
    private NotificationService notificationService;

    public Vote castVote(String email, VoteRequest request) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        Candidate candidate = candidateRepository.findById(request.getCandidateId())
                .orElseThrow(() ->
                        new RuntimeException("Candidate not found"));

        Election activeElection = electionRepository.findAll()
                .stream()
                .filter(election -> election.getStatus() == ElectionStatus.ACTIVE)
                .findFirst()
                .orElse(null);

        if (activeElection == null) {
            throw new VotingClosedException("Voting is currently closed.");
        }

        if (voteRepository.findByUser(user).isPresent()) {
            throw new AlreadyVotedException("You have already voted");
        }

        Vote vote = new Vote();

        vote.setUser(user);
        vote.setCandidate(candidate);
        vote.setVotedAt(LocalDateTime.now());

// Save Vote
        Vote savedVote = voteRepository.save(vote);

        notificationService.create(
                "A vote has been cast",
                "VOTE"
        );

// Mark user as voted
        user.setHasVoted(true);
        userRepository.save(user);

// Return saved vote
        return savedVote;
    }

}