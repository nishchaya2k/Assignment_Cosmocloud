import React from 'react'

const EmployeeCard = (props) => {

    const { employee, details } = props;

    return (
        <div className={`p-4 rounded-md ${details ? 'h-screen flex flex-col justify-center items-center' : ''}`}>
            <div className='flex flex-col justify-start'>

                <div className='text-xl font-semibold'><strong>Name: </strong>
                    {employee.name}
                </div>
                
                <p><strong>ID: </strong>
                    {employee._id}
                </p>

                {details && (
                    <div className='mt-2 space-y'>
                        <p><strong>City: </strong> {employee?.address?.line1?.city}</p>
                        <p><strong>Country: </strong> {employee?.address?.line1?.country}</p>
                        <p><strong>Zipcode: </strong> {employee?.address?.line1?.zipcode}</p>
                        <p><strong>Email: </strong> {employee?.contact_method?.email}</p>
                        <p><strong>Phone: </strong> {employee?.contact_method?.phone_no}</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default EmployeeCard
