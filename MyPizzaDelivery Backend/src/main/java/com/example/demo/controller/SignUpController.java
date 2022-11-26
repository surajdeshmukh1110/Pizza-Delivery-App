package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repo.SignUpRepo;
import com.example.demo.model.SignUp;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class SignUpController {
	
	@Autowired
	private SignUpRepo repo;
	@PostMapping("/signup")
     public ResponseEntity<SignUp> registerUser(@RequestBody SignUp signup){
		
		return ResponseEntity.ok(repo.save(signup));

	}


}
