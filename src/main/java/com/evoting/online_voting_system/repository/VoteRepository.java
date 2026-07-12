package com.evoting.online_voting_system.repository;

import com.evoting.online_voting_system.entity.User;
import com.evoting.online_voting_system.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {

    Optional<Vote> findByUser(User user);

}