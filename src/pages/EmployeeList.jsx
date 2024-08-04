import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeCard from '../components/EmployeeCard';

const EmployeeList = () => {

    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(10);
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()



    const fetchEmployees = async () => {
        const url = `https://free-ap-south-1.cosmocloud.io/development/api/ems?limit=10&offset=0`;

        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    projectId: '66ad18431042893da0a081a5',
                    environmentId: '66ad18431042893da0a081a6'
                }
            })


            if (!response.ok) {
                window.alert('Failed to fetch employee')
                return;
            }

            let result = await response.json();
            setEmployees(result.data);
            console.log(result.data)

        } catch (err) {
            console.error(err)
        }

    }

    const handleDelete = async (id) => {
        const url = `https://free-ap-south-1.cosmocloud.io/development/api/ems/${id}`;
        try {
            let response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    projectId: '66ad18431042893da0a081a5',
                    environmentId: '66ad18431042893da0a081a6'
                },
                body: JSON.stringify({}),
            })

            if (!response.ok) {
                window.alert('Failed to delete employee')
                return;
            }

            fetchEmployees();

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchEmployees()
    }, [limit, offset])  //for pagination I mentioned limit and offset here


    return (
        <div className='h-full'>
            {employees.length === 0 ? (
                <p className='mt-20 text-center text-xl'>No Employees in the system</p>
            ) : (
                <div>
                    {employees.map(employee => (
                        <div key={employee.id} className='flex justify-between border shadow-lg px-4 mt-4'>
                            <EmployeeCard employee={employee} details={false} />

                            <div className='flex flex-col gap-4 justify-center text-[13px] font-bold'>
                                <button onClick={() => navigate(`/emp_details/${employee._id}`)}> View Details</button> {'  '}
                                <button onClick={() => handleDelete(employee._id)}>Delete</button>
                            </div>

                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default EmployeeList
