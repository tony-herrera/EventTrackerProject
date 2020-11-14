package com.skilldistillery.garrison.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class GarrisonTest {
	
	private static EntityManagerFactory emf;
	private EntityManager  em;
	private Veteran vet;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("GarrisonPU");
		
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		vet = em.find(Veteran.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		
		em.close();
		vet = null;
	}

	@Test
	@DisplayName("Veteran entity mapping")
	void test1() {
		
		assertNotNull(vet);
		assertEquals("Tony", vet.getFirstName());
		assertEquals("tony.herrera@gmail.com", vet.getEmail());
		assertEquals("Herrera", vet.getLastName());
		assertEquals(1, vet.getAssignRecruiter());
		
	}

}
