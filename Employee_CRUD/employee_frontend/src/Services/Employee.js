import axios from 'axios';
import { useEffect, useState } from 'react';



function Employee(props)
{
    const baseURL = "http://localhost:8081/";
    
    const [emp,setemp] = useState({empid:props.empid, empname:props.empname, empsalary:props.empsalary, empdep:props.empdep});
    const [emplist, setemplist]=useState([{'empid':2, 'empname':'Employee Name', 'empsalary':100,'empdep':'Employee Dep'}]);

    const [searchid,setsearchid] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("handle function is called");
        addEmp(emp.empid,emp.empname,emp.empsalary,emp.empdep);
    }

    // Get Details From Employee Table

    useEffect( ()=> {
        console.log("useEffect hook called...");
        {getAllEmp()}
        
    }, []);


    const addEmp = (event) => {
        event.preventDefault();
        console.log("inside addEmp");

        let elist = emplist.filter(e=>e.empid===emp.empid);

        if(elist.length===0){
            console.log("post request called");
            axios.post(baseURL+"addemp",emp)
            .then((reponse)=>{
                console.log("emp added: "+emp.empid+" "+emp.empname+" "+emp.empsalary+" "+emp.empdep);
                getAllEmp();
            })
        } else {
            console.log("put request called");
            axios.put(baseURL+'updateemp/'+emp.empid,emp)
            .then((response)=>{
                console.log(response.data);
                getAllEmp();
            })
        }
    }


    const updateEmp = (e) => {
        console.log("inside updateEmp()");
        setemp(e);
    }



    const getAllEmp = (event) => {
        // event.preventDefault();
        axios.get(baseURL+'emps')
        .then((response)=>{
            setemplist(response.data);
            console.log(emplist);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    // const getEmpById = () => {
    //     // event.preventDefault();
    //     axios.get(baseURL+'empbyid/'+searchid)
    //     .then((response)=>{
    //         setemp(response.data);
    //         console.log(response.data);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // }

    const deleteEmpById = (eid) => {
        console.log("inside delete emp");
        axios.delete(baseURL+'deleteemp/'+eid)
        .then((response)=>{
            console.log(response.data);
            getAllEmp();
        })
        .catch((error)=>{
            console.log(error);
        })  
    }

    // const handlesearchchange = (event) => {
    //     setsearchid(event.target.value);
    // }

    return (
        
        <div>
            <div>
                <h3>Employee Form</h3>
                <form onSubmit={addEmp}>

                    <label>
                        Emp Id: 
                        <input type="number" value={emp.empid} 
                        onChange={(e)=>setemp({...emp,empid:e.target.value})}
                        />
                    </label><br/>
                    <label>
                        Emp Name: 
                        <input type="text" value={emp.empname} 
                        onChange={(e)=>setemp({...emp,empname:e.target.value})}/>
                    </label><br/>
                    <label>
                        Emp Salary: 
                        <input type="number" value={emp.empsalary} 
                        onChange={(e)=>setemp({...emp,empsalary:e.target.value})}/>
                    </label><br/>
                    <label>
                        Emp Department: 
                        <input type="text" value={emp.empdep} 
                        onChange={(e)=>setemp({...emp,empdep:e.target.value})}/>
                    </label><br/>
                    <input type='submit' />
                </form>
            </div>
            <hr/>
            <div>
                <h4>Employee Table</h4>
                <div>
                    {/* <p>
                        <input type="text" placeholder="search emp with id here" onChange={handlesearchchange}/>
                        <button onClick={ getEmpById(searchid.current.value)}/> 
                    </p> */}
                    
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Emp Id</th>
                            <th>Emp Name</th>
                            <th>Emp Salary</th>
                            <th>Emp Department</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emplist.map(emp =>
                        <tr key={emp.empid}>
                            <td>{emp.empid}</td>
                            <td>{emp.empname}</td>
                            <td>{emp.empsalary}</td>
                            <td>{emp.empdep}</td>
                            <td><button onClick={ () => updateEmp(emp)}>Edit</button></td>
                            <td><button onClick={ ()=> deleteEmpById(emp.empid)}>Delete</button></td>
                            
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <hr/>
        </div>
    )
}

export default Employee;









