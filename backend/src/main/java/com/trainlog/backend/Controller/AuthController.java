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

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<ApiResponse> signIn(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        try {
            User user = authService.authenticateUser(email, password);
            return ResponseEntity.ok(ApiResponse.success("Sign in successful", user));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }


    @PostMapping("/register")
    public ResponseEntity<ApiResponse> register(@Valid @RequestBody RegisterRequest request) {
        try {
            User user = authService.registerUser(request.getEmail(), request.getPassword());
            return ResponseEntity.ok(ApiResponse.success(
                    "Registration successful. Please check your email for verification link.",
                    user.getUserId()));
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
