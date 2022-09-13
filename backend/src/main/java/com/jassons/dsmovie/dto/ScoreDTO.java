package com.jassons.dsmovie.dto;

public class ScoreDTO {
	
	private Long moveId;
	private String email;
	private Double score;
	
	public ScoreDTO() {
		
	}

	public Long getMoveId() {
		return moveId;
	}

	public void setMoveId(Long id) {
		this.moveId = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}
	
	

}
