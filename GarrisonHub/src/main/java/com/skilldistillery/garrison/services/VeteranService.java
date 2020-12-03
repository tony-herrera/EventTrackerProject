package com.skilldistillery.garrison.services;

import java.util.List;
import com.skilldistillery.garrison.entities.Veteran;

public interface VeteranService {
	public List<Veteran> index();

	Veteran findById(int id);

	public Veteran addVeteran(Veteran veteran);

	public Veteran updateVeteran(int id, Veteran veteran);

	boolean destroy(int id);

}
