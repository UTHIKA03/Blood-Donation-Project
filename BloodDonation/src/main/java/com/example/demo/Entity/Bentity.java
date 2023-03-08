package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="Blood_Donation") 
public class Bentity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Patient_id;
    private String Patient_name;
    private String Blood_group;
    private String Patient_disease;
    private String Donar_name;
    private String Donar_Contact;
    private String Donar_Address;
    
    public Bentity() {}

	public Bentity(int patient_id, String patient_name, String blood_group, String patient_disease, String donar_name,
			String donar_Contact, String donar_Address) {
		super();
		Patient_id = patient_id;
		Patient_name = patient_name;
		Blood_group = blood_group;
		Patient_disease = patient_disease;
		Donar_name = donar_name;
		Donar_Contact = donar_Contact;
		Donar_Address = donar_Address;
	}

	public int getPatient_id() {
		return Patient_id;
	}

	public void setPatient_id(int patient_id) {
		Patient_id = patient_id;
	}

	public String getPatient_name() {
		return Patient_name;
	}

	public void setPatient_name(String patient_name) {
		Patient_name = patient_name;
	}

	public String getBlood_group() {
		return Blood_group;
	}

	public void setBlood_group(String blood_group) {
		Blood_group = blood_group;
	}

	public String getPatient_disease() {
		return Patient_disease;
	}

	public void setPatient_disease(String patient_disease) {
		Patient_disease = patient_disease;
	}

	public String getDonar_name() {
		return Donar_name;
	}

	public void setDonar_name(String donar_name) {
		Donar_name = donar_name;
	}

	public String getDonar_Contact() {
		return Donar_Contact;
	}

	public void setDonar_Contact(String donar_Contact) {
		Donar_Contact = donar_Contact;
	}

	public String getDonar_Address() {
		return Donar_Address;
	}

	public void setDonar_Address(String donar_Address) {
		Donar_Address = donar_Address;
	}
    

    
}

