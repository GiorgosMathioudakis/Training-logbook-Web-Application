package com.trainlog.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UsernameRequest {

    @NotBlank(message = "Username is required")
    @Size(min = 1, max = 25, message = "Username must be between 1 and 25 characters")
    @Pattern(regexp = "^\\S+$", message = "Username cannot contain spaces")
    private String username;

    @NotBlank(message = "Email is required")
    private String email;
}
