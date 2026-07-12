package com.evoting.online_voting_system.service;

import com.evoting.online_voting_system.entity.Candidate;
import com.evoting.online_voting_system.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    public Candidate addCandidate(Candidate candidate) {
        return candidateRepository.save(candidate);
    }

    public List<Candidate> getAllCandidates() {
        return candidateRepository.findAll();
    }

    public Candidate getCandidateById(Long id) {

        return candidateRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Candidate not found with id : " + id));

    }

    public Candidate updateCandidate(Long id, Candidate updatedCandidate) {

        Candidate existingCandidate = candidateRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Candidate not found with id : " + id));

        existingCandidate.setName(updatedCandidate.getName());
        existingCandidate.setParty(updatedCandidate.getParty());
        existingCandidate.setSymbol(updatedCandidate.getSymbol());
        existingCandidate.setDescription(updatedCandidate.getDescription());

        return candidateRepository.save(existingCandidate);
    }

    public void deleteCandidate(Long id) {

        Candidate candidate = candidateRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Candidate not found with id : " + id));

        candidateRepository.delete(candidate);
    }

}