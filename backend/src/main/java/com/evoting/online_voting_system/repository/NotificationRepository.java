package com.evoting.online_voting_system.repository;

import com.evoting.online_voting_system.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository
        extends JpaRepository<Notification, Long> {
}