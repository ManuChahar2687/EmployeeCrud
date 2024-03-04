package vw.manu.employee.backend.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vw.manu.employee.backend.model.Employee;
import vw.manu.employee.backend.service.EmpService;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})

public class EmployeeController {
	
	Logger logger = LoggerFactory.getLogger(EmployeeController.class);
	
	@Autowired
	EmpService es;
	
	
	@GetMapping("/hello")
	public String hello() {
		return "Hello, This is Manu";
	}
	
	@GetMapping("/")
	public String hello2() {
		return "Welcome";
	}
	
	
	
	/* Employee Get Details */
	@GetMapping("emps")
	public List<Employee> getAllEmp(){
		return es.getAllEmp();
	}
	
	@GetMapping("/empbyid/{empid}")
	public Optional<Employee> getEmpById(@PathVariable int empid) {
		return es.getEmpById(empid);
	}
	
	@GetMapping("/empbyname/{empname}")
	public List<Employee> getEmpByName(@PathVariable String empname){
		return es.getEmpByName(empname);
	}
	
	@GetMapping("/empbysal/{empsal}")
	public List<Employee> getEmpBySal(@PathVariable double empsal){
		return es.getEmpBySal(empsal);
	}
	
	
	/* Adding Data*/
	@PostMapping("addemp")
	public String addEmp(@RequestBody Employee emp) {
		return es.addEmp(emp);
	}
	
	/* Delete data from table */
	@DeleteMapping("deleteemp/{empid}")
	public String deleteEmpById(@PathVariable int empid) {
		return es.deleteEmpById(empid);
	}
	
	/* Update Employee */
	@PutMapping("updateemp/{empid}")
	public String updateEmpById(@PathVariable int empid, @RequestBody Employee emp) {
		return es.updateEmpById(empid, emp);
	}
	

}
