package com.evoting.online_voting_system.controller;

import com.evoting.online_voting_system.entity.Candidate;
import com.evoting.online_voting_system.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/candidates")
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @PostMapping
    public Candidate addCandidate(@RequestBody Candidate candidate) {
        return candidateService.addCandidate(candidate);
    }

    @GetMapping
    public List<Candidate> getAllCandidates() {
        return candidateService.getAllCandidates();
    }

    @GetMapping("/{id}")
    public Candidate getCandidateById(@PathVariable Long id) {
        return candidateService.getCandidateById(id);
    }

    @PutMapping("/{id}")
    public Candidate updateCandidate(@PathVariable Long id,
                                     @RequestBody Candidate candidate) {

        return candidateService.updateCandidate(id, candidate);

    }

    @DeleteMapping("/{id}")
    public void deleteCandidate(@PathVariable Long id) {

        candidateService.deleteCandidate(id);

    }


}