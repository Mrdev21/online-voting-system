package com.evoting.online_voting_system.controller;

import com.evoting.online_voting_system.entity.Notification;
import com.evoting.online_voting_system.service.NotificationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    private final NotificationService service;

    public NotificationController(NotificationService service) {
        this.service = service;
    }

    @GetMapping
    public List<Notification> getAll() {
        return service.getAllNotifications();
    }

    @PutMapping("/read")
    public void markAllRead() {
        service.markAllRead();
    }
}