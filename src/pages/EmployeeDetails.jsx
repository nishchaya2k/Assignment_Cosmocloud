import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeCard from '../components/EmployeeCard';

const EmployeeDetails = () => {

    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    const fetchEmployee = async () => {
        const url = `https://free-ap-south-1.cosmocloud.io/development/api/ems/${id}`;

        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'projectId': '66ad18431042893da0a081a5',
                    'environmentId': '66ad18431042893da0a081a6'
                }
            });

            if (!response.ok) {
                window.alert('Failed to load employee details')
                return;
            }

            let result = await response.json();
            setEmployee(result);

        } catch (err) {
            setError('Failed to fetch employee details. Please try again later.');
        }
    };

    useEffect(() => {
        fetchEmployee();
    }, [id]);

    return (
        <div>
            {employee && (
                <EmployeeCard employee={employee} details={true} />
            )}
        </div>
    );
}

export default EmployeeDetails;
