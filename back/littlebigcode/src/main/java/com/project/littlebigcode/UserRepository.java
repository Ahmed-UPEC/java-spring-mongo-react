package com.project.littlebigcode;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository 
    extends MongoRepository<User, String> {

    Optional<User> findUserByStudentEmail(String email);

} 