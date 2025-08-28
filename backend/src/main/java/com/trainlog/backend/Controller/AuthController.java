package com.trainlog.backend.Controller;

import com.trainlog.backend.dto.ApiResponse;
import com.trainlog.backend.dto.RegisterRequest;
import com.trainlog.backend.dto.UsernameRequest;
import com.trainlog.backend.model.User;
import com.trainlog.backend.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse> register(@Valid @RequestBody RegisterRequest request) {
        try {
            User user = authService.registerUser(request.getEmail(), request.getPassword());
            return ResponseEntity.ok(ApiResponse.success(
                    "Registration successful. Please check your email for verification link.",
                    user.getId()));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    @GetMapping("/verify-email")
    public ResponseEntity<ApiResponse> verifyEmail(@RequestParam("token") String token) {
        try {
            User user = authService.verifyEmail(token);
            return ResponseEntity.ok(ApiResponse.success(
                    "Email verified successfully. Please set your username to complete registration.",
                    user.getEmail()));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    @PostMapping("/set-username")
    public ResponseEntity<ApiResponse> setUsername(@Valid @RequestBody UsernameRequest request) {
        try {
            User user = authService.updateUsername(request.getEmail(), request.getUsername());
            return ResponseEntity.ok(ApiResponse.success(
                    "Username set successfully. Registration complete!",
                    user));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }
}
