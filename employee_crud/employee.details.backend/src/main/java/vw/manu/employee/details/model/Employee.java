package vw.manu.employee.details.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="emp")
public class Employee {
	
	@Id
	@Column(name="empid")
	private int empid;
	
	@Column(name="empname")
	private String empname;
	
	@Column(name="empsalary")
	private double empsal;
	
	@Column(name="empdep")
	private String empdep;
	
	

	public Employee() {
		super();
	}

	public Employee(int empid, String empname, double empsal, String empdep) {
		super();
		this.empid = empid;
		this.empname = empname;
		this.empsal = empsal;
		this.empdep = empdep;
	}

	public int getEmpid() {
		return empid;
	}

	public void setEmpid(int empid) {
		this.empid = empid;
	}

	public String getEmpname() {
		return empname;
	}

	public void setEmpname(String empname) {
		this.empname = empname;
	}

	public double getEmpsal() {
		return empsal;
	}

	public void setEmpsal(double empsal) {
		this.empsal = empsal;
	}

	public String getEmpdep() {
		return empdep;
	}

	public void setEmpdep(String empdep) {
		this.empdep = empdep;
	}

	@Override
	public String toString() {
		return "Employee [empid=" + empid + ", empname=" + empname + ", empsal=" + empsal + ", empdep=" + empdep + "]";
	}
	
	
	
	
	

}
