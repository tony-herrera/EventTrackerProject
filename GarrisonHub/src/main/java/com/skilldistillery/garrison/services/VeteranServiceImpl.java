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
	public List<Veteran> index() {
		return vetRepo.findAll();
	}

	@Override
	public Veteran findById(int id) {
		return vetRepo.findById(id);
	}

	@Override
	public Veteran addVeteran(Veteran veteran) {
		return vetRepo.saveAndFlush(veteran);

	}

	@Override
	public Veteran updateVeteran(int id, Veteran veteran) {
		System.out.println(veteran);
		Veteran managedVet = vetRepo.findById(id);

		if (managedVet != null) {
			managedVet.setFirstName(veteran.getFirstName());
			managedVet.setLastName(veteran.getFirstName());
			managedVet.setBranch(veteran.getBranch());
			managedVet.setEaos(veteran.getEaos());
			managedVet.setAssignRecruiter(veteran.getAssignRecruiter());
			managedVet.setDutyStation(veteran.getDutyStation());
			managedVet.setEmail(veteran.getEmail());
			managedVet.setPhoneNumber(veteran.getPhoneNumber());
			managedVet.setCareerInterest(veteran.getCareerInterest());
			managedVet.setDodSkillBridge(veteran.getDodSkillBridge());

			vetRepo.saveAndFlush(veteran);
		}
		return managedVet;
	}

	@Override
	public boolean destroy(int id) {
		boolean deleted = false;
		Veteran veteran = vetRepo.findById(id);
		if (veteran != null) {
			vetRepo.delete(veteran);
			deleted = true;
		}
		return deleted;
	}

}
