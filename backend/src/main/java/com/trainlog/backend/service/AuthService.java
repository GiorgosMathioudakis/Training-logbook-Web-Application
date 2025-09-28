package com.trainlog.backend.service;

import com.trainlog.backend.model.AppUserRole;
import com.trainlog.backend.model.User;
import com.trainlog.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(String email, String password) {
        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already registered");
        }

        User user = new User();
        user.setEmail(email);
        user.setPasswordHash(passwordEncoder.encode(password));
        user.setAppUserRole(AppUserRole.USER);
        user.setEnabled(true); // Enable user immediately
        user.setCreatedAt(LocalDateTime.now());

        return userRepository.save(user);
    }


    public User updateUsername(String email, String username) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));


        if (userRepository.existsByUsername(username)) {
            throw new RuntimeException("Username already taken");
        }

        user.setUsername(username);
        return userRepository.save(user);
    }
}
