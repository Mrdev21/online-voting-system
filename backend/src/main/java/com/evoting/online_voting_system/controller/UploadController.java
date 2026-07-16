package com.evoting.online_voting_system.controller;

import com.evoting.online_voting_system.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/upload")
public class UploadController {

    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping(
            value = "/candidate",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<?> uploadCandidateImage(
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        String imageUrl =
                fileStorageService.uploadFile(file, "candidates");

        return ResponseEntity.ok(
                Map.of("photo", imageUrl)
        );
    }

    @PostMapping(
            value = "/profile",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<?> uploadProfileImage(
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        String imageUrl =
                fileStorageService.uploadFile(file, "profiles");

        return ResponseEntity.ok(
                Map.of("photo", imageUrl)
        );
    }

}