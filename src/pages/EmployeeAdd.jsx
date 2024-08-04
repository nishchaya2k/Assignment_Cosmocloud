import React, { useState } from 'react'


const EmployeeAdd = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState({
        city: '',
        country: '',
        zipcode: ''
    });
    const [contact, setContact] = useState({ email: '', phone_no: '' });


    const addEmployee = async (e) => {

        const newEmployee = {
            name,
            address: {
                line1: address
            },
            contact_method: contact
        };

        try {
            let response = await fetch('https://free-ap-south-1.cosmocloud.io/development/api/ems', {
                method: 'POST',
                headers: {
                    'projectId': '66ad18431042893da0a081a5',
                    'environmentId': '66ad18431042893da0a081a6'
                },
                body: JSON.stringify(newEmployee)
            });

            if (!response.ok) {
                window.alert('Failed to add employee')
                return;
            }

            // Reset the form states after successful addition
            setName('');
            setAddress({
                city: '',
                country: '',
                zipcode: ''
            });
            setContact({ email: '', phone_no: '' });


        } catch (err) {
            console.error('Failed to add employee. Please try again later.');
        }
    };

    const handleAddEmployee = (e) => {
        e.preventDefault();
        addEmployee()
    }

    const handleAddress = (e) => {

        const { name, value } = e.target
        setAddress(prevAddress => ({
            ...prevAddress,
            [name]: value
        }))
    }

    const handleContact = (e) => {

        const { name, value } = e.target
        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }))
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <form onSubmit={handleAddEmployee} className='space-y-10 text-xl'>

                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        className='w-80 p-1 ml-4 rounded-md bg-gray-300'
                        onChange={(e) => setName(e.target.value)} required />
                </label>

                <div className='flex flex-col gap-2'>
                    <span className='text-lg font-semibold'>Address:</span>
                    <div className='space-x-4'>
                        <span className='text-lg'>Line1 - </span>
                        <label>
                            City:
                            <input
                                type='text'
                                name='city'
                                className='ml-4 p-1 rounded-md bg-gray-300'
                                value={address.city} onChange={handleAddress} />
                        </label>

                        <label>
                            Country:
                            <input
                                type='text'
                                name='country'
                                className='ml-4 p-1 rounded-md bg-gray-300'
                                value={address.country}
                                onChange={handleAddress} />
                        </label>

                        <label>
                            Zipcode:
                            <input
                                type='text'
                                name='zipcode'
                                className='ml-4 p-1 rounded-md bg-gray-300'
                                value={address.zipcode}
                                onChange={handleAddress} />
                        </label>
                    </div>


                </div>

                <div className='flex flex-col gap-2'>
                    <span className='text-lg font-semibold'>Contact Methods:</span>
                    <div className='space-x-4'>
                        <label>
                            Email:
                            <input
                                type="text"
                                name='email'
                                value={contact.email}
                                className='w-80 ml-4 p-1 rounded-md bg-gray-300'
                                onChange={handleContact} required />
                        </label>
                        <label>
                            Phone Number:
                            <input
                                type="text"
                                name='phone_no'
                                value={contact.phone_no}
                                className='ml-4 p-1 rounded-md bg-gray-300'
                                onChange={handleContact} required />
                        </label>
                    </div>

                </div>

                <button className='max-w-fit p-2 rounded-md bg-gray-400' type='submit'>Create Employee</button>

            </form>
        </div>

    )
}

export default EmployeeAdd;
