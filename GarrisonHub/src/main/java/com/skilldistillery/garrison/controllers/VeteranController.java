package com.skilldistillery.garrison.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin({ "*", "http://localhost:4205" })
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

	@GetMapping("veterans/{veteranId}")
	public Veteran findById(@PathVariable int veteranId, HttpServletResponse response) {
		Veteran veteran = svc.findById(veteranId);
		if (veteran == null) {
			response.setStatus(404);
		}
		return veteran;
	}

	@PostMapping("veterans")
	public Veteran addVeteran(@RequestBody Veteran veteran, HttpServletRequest request, HttpServletResponse response) {

		System.out.println(veteran);
		veteran = svc.addVeteran(veteran);
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

	@PutMapping("veterans/{veteranId}")
	public Veteran updateVeteran(@PathVariable Integer veteranId, @RequestBody Veteran veteran, HttpServletResponse response,
			HttpServletRequest request) {
		System.out.println(veteran);
		try {
			veteran = svc.updateVeteran(veteranId, veteran);
			if (veteran == null) {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(400);
			veteran = null;
		}
		return veteran;
	}


	@DeleteMapping("veterans/{veteranId}")
	public void destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable int veteranId) {
		try {
			boolean deleted = svc.destroy(veteranId);
			if (deleted) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
	}
}
