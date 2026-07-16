package com.evoting.online_voting_system.controller;

import com.evoting.online_voting_system.entity.Election;
import com.evoting.online_voting_system.service.ElectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/elections")
public class ElectionController {

    @Autowired
    private ElectionService electionService;

    @PostMapping
    public Election addElection(@RequestBody Election election) {
        return electionService.addElection(election);
    }

    @GetMapping
    public List<Election> getAllElections() {
        return electionService.getAllElections();
    }

    @GetMapping("/{id}")
    public Election getElectionById(@PathVariable Long id) {
        return electionService.getElectionById(id);
    }

    @PutMapping("/{id}")
    public Election updateElection(
            @PathVariable Long id,
            @RequestBody Election election) {

        return electionService.updateElection(id, election);
    }

    @DeleteMapping("/{id}")
    public void deleteElection(@PathVariable Long id) {
        electionService.deleteElection(id);
    }
}