package com.skilldistillery.garrison.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Veteran {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "first_name")
	private String firstName;

	private String branch;

	public Veteran(int id, String firstName, String branch, String lastName, String email, String phoneNumber,
			String careerInterest, String dodSkillBridge, String eaos, String assignRecruiter, String dutyStation) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.branch = branch;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.careerInterest = careerInterest;
		this.dodSkillBridge = dodSkillBridge;
		this.eaos = eaos;
		this.assignRecruiter = assignRecruiter;
		this.dutyStation = dutyStation;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}

	@Column(name = "last_name")
	private String lastName;

	private String email;

	@Column(name = "phone_number")
	private String phoneNumber;

	@Column(name = "career_interest")
	private String careerInterest;

	@Column(name = "dod_skill_bridge")
	private String dodSkillBridge;

	private String eaos;

	@Column(name = "assign_recruiter")
	private String assignRecruiter;

	@Column(name = "duty_station")
	private String dutyStation;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getCareerInterest() {
		return careerInterest;
	}

	public void setCareerInterest(String careerInterest) {
		this.careerInterest = careerInterest;
	}

	public String getDodSkillBridge() {
		return dodSkillBridge;
	}

	public void setDodSkillBridge(String dodSkillBridge) {
		this.dodSkillBridge = dodSkillBridge;
	}

	public String getEaos() {
		return eaos;
	}

	public void setEaos(String eaos) {
		this.eaos = eaos;
	}

	public String getAssignRecruiter() {
		return assignRecruiter;
	}

	public void setAssignRecruiter(String assignRecruiter) {
		this.assignRecruiter = assignRecruiter;
	}

	public String getDutyStation() {
		return dutyStation;
	}

	public void setDutyStation(String dutyStation) {
		this.dutyStation = dutyStation;
	}

	public Veteran() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Veteran other = (Veteran) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Veteran [id=" + id + ", firstName=" + firstName + ", branch=" + branch + ", lastName=" + lastName
				+ ", email=" + email + ", phoneNumber=" + phoneNumber + ", careerInterest=" + careerInterest
				+ ", dodSkillBridge=" + dodSkillBridge + ", eaos=" + eaos + ", assignRecruiter=" + assignRecruiter
				+ ", dutyStation=" + dutyStation + "]";
	}

}
