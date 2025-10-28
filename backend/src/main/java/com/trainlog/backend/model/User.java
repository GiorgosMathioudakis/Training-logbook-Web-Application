package com.trainlog.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String passwordHash;

    @Column(nullable = false)
    private AppUserRole appUserRole;

    @Column(nullable = false)
    private boolean enabled = false;

    @Column(nullable = true)
    private String emailVerificationToken;

    @Column(nullable = true)
    private LocalDateTime emailVerificationTokenExpiry;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

}
