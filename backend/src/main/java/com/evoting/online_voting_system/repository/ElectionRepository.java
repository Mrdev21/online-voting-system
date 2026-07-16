package com.evoting.online_voting_system.repository;

import com.evoting.online_voting_system.entity.Election;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ElectionRepository extends JpaRepository<Election, Long> {
}