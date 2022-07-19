package com.jassons.dsmovie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

@RestController /*Acréscimo para teste na URL*/

public class DsmovieApplication {

	public static void main(String[] args) {
		SpringApplication.run(DsmovieApplication.class, args);
	}
	
	/*Acréscimo para teste na URL*/
	@GetMapping("/")
	public String index() {
		return "Olá, Mundo!";
	}

}
