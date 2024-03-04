package vw.manu.employee.backend.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vw.manu.employee.backend.model.Employee;
import vw.manu.employee.backend.repository.EmpRepo;
import vw.manu.employee.backend.repository.EmpRepoInterface;

@Service
public class EmpService {
	
	@Autowired
	EmpRepoInterface eri;
	
	private Logger logger = LoggerFactory.getLogger(EmpRepo.class); 
	
	
	/* Get Data from Employee */
	public List<Employee> getAllEmp() {
		return eri.findAll();
	}
	
	public Optional<Employee> getEmpById(int empid) {
		return eri.findById(empid);
	}
	
	public List<Employee> getEmpByName(String empname){
		return eri.findByEmpname(empname);
	}
	
	public List<Employee> getEmpBySal(double empsalary){
		return eri.findByEmpsalary(empsalary);
	}
	
	public List<Employee> getEmpByDep(String empdep){
		return eri.findByEmpdep(empdep);
	}
	
	
	
	/* Adding data to Employee Table */
	public String addEmp(Employee emp) {
		eri.save(emp);
		return "added successfully";
	}
	
	
	/* Delete data from table */
	public String deleteEmpById(int empid) {
		eri.deleteById(empid);
		return "Emp with "+empid+"deleted successfully";
	}
	
	
	/* Update data */
	public String updateEmpById(int empid, Employee e) {
		if(eri.existsById(empid)==true) {
			eri.deleteById(empid);
			eri.save(e);
		}
		return "Employee with empid "+empid+" updated successfully.";
	}

}
