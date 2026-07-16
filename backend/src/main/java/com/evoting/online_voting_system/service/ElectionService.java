package com.evoting.online_voting_system.service;

import com.evoting.online_voting_system.entity.Election;
import com.evoting.online_voting_system.repository.ElectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ElectionService {

    @Autowired
    private ElectionRepository electionRepository;

    @Autowired
    private NotificationService notificationService;

    public Election addElection(Election election) {

        Election savedElection = electionRepository.save(election);

        notificationService.create(
                "Election \"" + savedElection.getTitle() + "\" created",
                "ELECTION"
        );

        return savedElection;
    }

    public List<Election> getAllElections() {
        return electionRepository.findAll();
    }

    public Election getElectionById(Long id) {
        return electionRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Election not found"));
    }

    public Election updateElection(Long id, Election updatedElection) {

        Election election = getElectionById(id);

        election.setTitle(updatedElection.getTitle());
        election.setStartDate(updatedElection.getStartDate());
        election.setEndDate(updatedElection.getEndDate());
        election.setStatus(updatedElection.getStatus());

        return electionRepository.save(election);
    }

    public void deleteElection(Long id) {
        electionRepository.deleteById(id);
    }
}