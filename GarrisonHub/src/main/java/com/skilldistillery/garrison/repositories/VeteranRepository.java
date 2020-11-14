package com.skilldistillery.garrison.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.garrison.entities.Veteran;

public interface VeteranRepository extends JpaRepository<Veteran, Integer> {
	List<Veteran> findById(int id);
}
