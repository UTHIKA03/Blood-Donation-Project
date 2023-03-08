package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Bentity;
import com.example.demo.Service.Bservice;
@CrossOrigin
@RestController

public class Bcontroller {

	@Autowired
	private Bservice Sserve;
	
	@PostMapping("/add")
	public Bentity postB(@RequestBody Bentity stu)
	{
		return Sserve.addB(stu);
	}
	
	@GetMapping("/show")
	public List<Bentity> showB()
	{
		List<Bentity> a = new ArrayList<>();
		a = Sserve.getB();
		return a;
	}
	
	@DeleteMapping ("/delete/{id}")
	public void delete(@PathVariable("id") int id) {
		Sserve.deletebById(id);
	}
	@PutMapping("/update/{id}")
      public  Bentity  update(@PathVariable int id,@RequestBody Bentity s) {
    	  return Sserve.update(id, s);
      }
	
	
}
