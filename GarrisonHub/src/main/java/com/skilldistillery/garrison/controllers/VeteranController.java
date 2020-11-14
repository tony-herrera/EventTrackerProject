package com.skilldistillery.garrison.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.garrison.entities.Veteran;
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

	@GetMapping("veterans")
	public List<Veteran> listAllVeterans() {
		return svc.index();
	}

	@PostMapping("veterans")
	public Veteran addVeteran(@RequestBody Veteran veteran, HttpServletRequest request, HttpServletResponse response) {

		System.out.println("*********");
		System.out.println(veteran);
		System.out.println("*******");
		veteran = svc.addVeteran(veteran);
		if (veteran == null) {
			response.setStatus(400);

		} else {
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(veteran.getId());
			response.setHeader("Location", url.toString());
		}
		return veteran;
	}

	@PutMapping("veterans/{id}")
	public Veteran updateVeteran(@PathVariable Integer id, @RequestBody Veteran veteran, HttpServletResponse response,
			HttpServletRequest request) {
		System.out.println("***");
		System.out.println(veteran);
		System.out.println("***");
		veteran = svc.updateVeteran(id, veteran);
		if (veteran == null) {
			response.setStatus(404);
		} else {
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(veteran.getId());
			response.setHeader("Location", url.toString());
		}
		return veteran;
	}

	@DeleteMapping("veterans/{id}")
	public boolean deleteVeteran(@PathVariable Integer id, HttpServletResponse response, HttpServletRequest request) {
		try {
			boolean deleted = svc.deleteVeteran(id);
			if (deleted) {
				response.setStatus(204);
				return true;
			} else {
				response.setStatus(404);

			}
		} catch (Exception e) {
			response.setStatus(400);
		}
		return false;
	}
}
