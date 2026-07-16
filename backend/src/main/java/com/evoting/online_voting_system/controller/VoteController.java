package com.evoting.online_voting_system.controller;

import com.evoting.online_voting_system.dto.VoteRequest;
import com.evoting.online_voting_system.entity.Vote;
import com.evoting.online_voting_system.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/votes")
public class VoteController {

    @Autowired
    private VoteService voteService;

    @PostMapping
    public Vote castVote(@RequestBody VoteRequest request,
                         Authentication authentication) {

        System.out.println(authentication.getName());

        return voteService.castVote(authentication.getName(), request);
    }
}