package com.trainlog.backend.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class WorkoutExercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long workoutExerciseId;

    @Column(nullable = false)
    private Long exerciseId;

    @Column(nullable = false)
    private Long workoutId;
}
