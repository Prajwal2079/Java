import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const EmployeeList = () => {

    let [emplist, setemplist] = useState([]);
    let [flag, setflag] = useState(false);
    var history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8080/employee")
            .then((response) => {
                setemplist(response.data)
            })
        // EmployeeService.getAllEmployees()
        //     .then((response) => {
        //         console.log(response.data)
        //         setemplist(response.data)
        //     })
        //     .catch((err) => { console.log("error occured", err) })
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8080/employee")
            .then((response) => {
                setemplist(response.data)
            })
    }, [flag]);

    const deleteemp = (empid) => {
        axios.delete("http://localhost:8080/employee/" + empid)
            .then((response) => {
                setflag(true)
            })
    }

    const renderlist = () => {
        return emplist.map((emp) => {
            return <tr key={emp.empid}>
                <td>{emp.empid}</td>
                <td>{emp.ename}</td>
                <td>{emp.sal}</td>
                <td>
                    <Link to="/">
                        <button type="button" id="delete" onClick={() => { deleteemp(emp.empid) }}>Delete</button>
                    </Link>
                </td>
            </tr>
        })
    }



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>sal</th>
                    </tr>
                </thead>
                <tbody>

                    {renderlist()}

                </tbody>

            </table>

        </div>
    )
}

export default EmployeeList;