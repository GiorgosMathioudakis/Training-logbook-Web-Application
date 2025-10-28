package com.trainlog.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ExerciseSet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ExerciseSetId;

    @Column(nullable = false)
    private long WorkoutExerciseId;

    private String load;

    private String setNo;

    private String repetitions;

    private String rest;

    private short RPE;

}
