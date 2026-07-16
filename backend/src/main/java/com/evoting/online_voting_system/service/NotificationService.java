package com.evoting.online_voting_system.service;

import com.evoting.online_voting_system.entity.Notification;
import com.evoting.online_voting_system.repository.NotificationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    private final NotificationRepository repository;

    public NotificationService(NotificationRepository repository) {
        this.repository = repository;
    }

    public List<Notification> getAllNotifications() {
        return repository.findAll()
                .stream()
                .sorted((a, b) ->
                        b.getCreatedAt().compareTo(a.getCreatedAt()))
                .toList();
    }

    public Notification create(String title, String type) {

        Notification notification = new Notification();

        notification.setTitle(title);
        notification.setType(type);

        return repository.save(notification);
    }

    public void markAllRead() {

        List<Notification> list = repository.findAll();

        list.forEach(n -> n.setIsRead(true));

        repository.saveAll(list);
    }
}