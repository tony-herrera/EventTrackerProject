package com.skilldistillery.garrison.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.garrison.entities.Veteran;

public interface VeteranRepository extends JpaRepository<Veteran, Integer> {
	Veteran findById(int id);
}
