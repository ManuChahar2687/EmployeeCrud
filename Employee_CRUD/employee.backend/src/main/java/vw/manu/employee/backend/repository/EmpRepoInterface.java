package vw.manu.employee.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vw.manu.employee.backend.model.Employee;

@Repository
public interface EmpRepoInterface extends JpaRepository<Employee, Integer>{
	
	
	public List<Employee> findByEmpname(String empname);
	
	public List<Employee> findByEmpsalary(double empsalary);
	
	public List<Employee> findByEmpdep(String empdep);

}
