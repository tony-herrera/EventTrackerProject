package com.skilldistillery.garrison.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.garrison.services.VeteranService;

@RequestMapping("api")
@RestController
public class VeteranController {
	
	@Autowired
	private VeteranService svc;

	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
}
