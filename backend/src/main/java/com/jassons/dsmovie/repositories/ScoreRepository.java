package com.jassons.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jassons.dsmovie.entities.Score;
import com.jassons.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository <Score, ScorePK> {
	
}
