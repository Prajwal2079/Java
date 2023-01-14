import axios from 'axios'

class EmployeeService{
    constructor(){
        this.baseurl = "http://localhost:8080/";
    };
    getAllEmployees(){
        return axios.get(this.baseurl+"employee")
    };
    insertEmployee(emp){
        return axios.post(this.baseurl+"employee/",emp)
    };
    deleteEmployee(empid){
        return axios.delete(this.baseurl+"employee/"+empid)
    };
    updateEmployee(emp){
        return axios.put(this.baseurl+"employee/"+emp.empid,emp)
    };

}

export default new EmployeeService();