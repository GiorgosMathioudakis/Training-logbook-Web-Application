package com.trainlog.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.OffsetScrollPosition;

import java.time.OffsetDateTime;


@Getter
@Setter
@Entity
public class Workout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long workoutId;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String name;

    private String description;

    @Column(nullable = false)
    private OffsetDateTime workoutDate;

}
