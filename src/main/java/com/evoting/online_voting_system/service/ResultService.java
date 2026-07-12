package com.evoting.online_voting_system.service;

import com.evoting.online_voting_system.dto.ResultResponse;
import com.evoting.online_voting_system.entity.Candidate;
import com.evoting.online_voting_system.repository.CandidateRepository;
import com.evoting.online_voting_system.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ResultService {

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private VoteRepository voteRepository;

    public List<ResultResponse> getAllResults() {

        List<Candidate> candidates = candidateRepository.findAll();

        List<ResultResponse> results = new ArrayList<>();

        for (Candidate candidate : candidates) {

            long votes = voteRepository.countByCandidate(candidate);

            ResultResponse response = new ResultResponse(
                    candidate.getName(),
                    candidate.getParty(),
                    votes
            );

            results.add(response);
        }

        return results;
    }

}