package com.evoting.online_voting_system.controller;

import com.evoting.online_voting_system.dto.ResultResponse;
import com.evoting.online_voting_system.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/results")
public class ResultController {

    @Autowired
    private ResultService resultService;

    @GetMapping
    public List<ResultResponse> getAllResults() {

        return resultService.getAllResults();

    }
}