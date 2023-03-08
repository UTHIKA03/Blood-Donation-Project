package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Bentity;
import com.example.demo.Repo.Brepo;


@Service

public class Bservice  {

	@Autowired
	private Brepo repo;
	
	public Bentity addB(Bentity obj)
	{
		return repo.save(obj);
	}
	
	public List<Bentity> getB()
	{
		List<Bentity> arr=new ArrayList<>();
		arr=repo.findAll();
		return arr;
	}
	public void deletebById(int id)
    {
   	 repo.deleteById(id);
    }
    
  public  Bentity update(int id,Bentity s) {
	   return repo.saveAndFlush(s);
  }
	
}
