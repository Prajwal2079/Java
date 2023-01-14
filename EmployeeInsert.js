import axios from "axios"
import { Link } from "react-router-dom"

const { useState, useEffect } = require("react")
const EmployeeService = require("./EmployeeService")

const EmployeeInsert = () => {

    let [empob, setempob] = useState({ empid: "", ename: "", sal: "" })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setempob({ ...empob, [name]: value })

    }

    const addEmployee = (event) => {

        event.preventDefault()
        console.log(empob)

        axios.post("http://localhost:8080/employee/", empob)
    }

    return (
        <div>
            <form method="post" onSubmit={addEmployee}>

                Empolyee ID: <input type="text" id="empid" name="empid" value={empob.empid} onChange={handleChange} />
                Empolyee Name: <input type="text" id="ename" name="ename" value={empob.ename} onChange={handleChange} />
                Empolyee Salary: <input type="text" id="sal" name="sal" value={empob.sal} onChange={handleChange} />
                    Submit<input type="submit" />

            </form>
        </div>
    )
}

export default EmployeeInsert;