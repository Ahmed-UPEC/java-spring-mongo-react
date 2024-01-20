package com.project.littlebigcode;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class User {
    @Id
    private String id;
    private String name;
    private Integer age;
    @Indexed(unique = true)
    private String studentEmail;
    private String studentId;
    private String subject;
    private LocalDateTime createdAt;

    // constructor without id
    public User(String name, Integer age, 
                String studentEmail, String studentId, String subject,
                LocalDateTime createdAt) {
        this.name = name;
        this.age = age;
        this.studentEmail = studentEmail;
        this.studentId = studentId;
        this.subject = subject;
        this.createdAt = createdAt;
    }

}
