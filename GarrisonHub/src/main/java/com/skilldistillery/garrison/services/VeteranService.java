package com.skilldistillery.garrison.services;

import java.util.List;

import com.skilldistillery.garrison.entities.Veteran;

public interface VeteranService {
	List<Veteran> index();

	Veteran addVeteran(Veteran veteran);


	Veteran updateVeteran(Integer id, Veteran veteran);

	boolean deleteVeteran(Integer id);


}
