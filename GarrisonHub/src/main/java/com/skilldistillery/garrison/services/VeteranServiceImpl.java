package com.skilldistillery.garrison.services;

import java.util.List;
import java.util.Optional;

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
	public Veteran findById(int veteranId) {
		return vetRepo.findById(veteranId);
	}

	@Override
	public Veteran addVeteran(Veteran veteran) {
		return vetRepo.saveAndFlush(veteran);

	}

	@Override
	public Veteran updateVeteran(Integer id, Veteran veteran) {

		Optional<Veteran> veteranOp = vetRepo.findById(id);
		if (veteranOp.isPresent()) {
			Veteran vet = veteranOp.get();
			vet.setFirstName(vet.getFirstName());
			vet.setLastName(vet.getFirstName());
			vet.setBranch(vet.getBranch());
			vet.setEaos(vet.getEaos());
			vet.setAssignRecruiter(vet.getAssignRecruiter());
			vet.setDutyStation(vet.getDutyStation());
			vet.setEmail(vet.getEmail());
			vet.setPhoneNumber(vet.getPhoneNumber());
			vet.setCareerInterest(vet.getCareerInterest());
			vet.setDodSkillBridge(vet.getDodSkillBridge());

			vetRepo.saveAndFlush(veteran);
		} else {
			veteran = null;
		}
		return veteran;
	}

	@Override
	public boolean deleteVeteran(Integer id) {
		boolean deleted = false;
		Optional<Veteran> veteranOpt = vetRepo.findById(id);
		if (veteranOpt.isPresent()) {
			vetRepo.delete(veteranOpt.get());

			deleted = true;
		}
		return deleted;
	}
}
