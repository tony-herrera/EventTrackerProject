package com.skilldistillery.garrison.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.garrison.entities.Veteran;
import com.skilldistillery.garrison.repositories.VeteranRepository;

@Service
public class VeteranServiceImpl implements VeteranService {

	@Autowired
	private VeteranRepository vetRepo;

	@Override
	public List<Veteran> getAllVeterans() {
		// TODO Auto-generated method stub
		return null;
	}

}
