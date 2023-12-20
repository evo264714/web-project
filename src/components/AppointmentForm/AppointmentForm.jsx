import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        phoneNumber: '',
        email: '',
        symptoms: '',
        selectDate: '',
        department: '',
        gender: '',
        time: '',
    });
    const initialFormData = {
        patientName: '',
        phoneNumber: '',
        email: '',
        symptoms: '',
        selectDate: '',
        department: '',
        gender: '',
        time: '',
    };
    const resetForm = () => {
        setFormData(initialFormData);
    };

    const departments = ["Cardiology", "Neurology", "Pediatrics", "General"];
    const times = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];
    const genders = ["Male", "Female", "Other"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Appointment created', result);
                Swal.fire({
                    title: 'Success!',
                    text: 'Your appointment has been made!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      resetForm(); // This resets the form after the alert is closed
                    }
                  });
                // Handle success, clear form, display message, etc.
            } else {
                // Handle errors, such as by setting an error message in your component state
                Swal.fire({
                    title: 'Error!',
                    text: 'There was a problem making your appointment.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.error('Network error:', error);
            // Handle network errors, such as by setting an error message in your component state
            Swal.fire({
                title: 'Error!',
                text: 'Network error. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });

        }
    };

    return (
        <div className="min-h-screen bg-blue-50 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-center text-2xl font-bold mb-6 text-blue-800">Make an Appointment</h2>

                <div className='flex gap-6'>
                    {/* Patient Name */}
                    <div>
                        <div className="mb-4">
                            <label htmlFor="patientName" className="block text-gray-700 text-sm font-bold mb-2">Patient Name</label>
                            <input
                                type="text"
                                id="patientName"
                                name="patientName"
                                onChange={handleChange}
                                value={formData.patientName}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                onChange={handleChange}
                                value={formData.phoneNumber}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        {/* Symptoms */}
                        <div className="mb-4">
                            <label htmlFor="symptoms" className="block text-gray-700 text-sm font-bold mb-2">Symptoms</label>
                            <textarea
                                id="symptoms"
                                name="symptoms"
                                onChange={handleChange}
                                value={formData.symptoms}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                    </div>
                    <div>
                        {/* Select Date */}
                        <div className="mb-4">
                            <label htmlFor="selectDate" className="block text-gray-700 text-sm font-bold mb-2">Select Date</label>
                            <input
                                type="date"
                                id="selectDate"
                                name="selectDate"
                                onChange={handleChange}
                                value={formData.selectDate}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        {/* Department */}
                        <div className="mb-4">
                            <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">Department</label>
                            <select
                                id="department"
                                name="department"
                                onChange={handleChange}
                                value={formData.department}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                <option value="">Select Department</option>
                                {departments.map((dept, index) => (
                                    <option key={index} value={dept}>{dept}</option>
                                ))}
                            </select>
                        </div>

                        {/* Gender */}
                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                onChange={handleChange}
                                value={formData.gender}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                <option value="">Select Gender</option>
                                {genders.map((gender, index) => (
                                    <option key={index} value={gender}>{gender}</option>
                                ))}
                            </select>
                        </div>

                        {/* Time */}
                        <div className="mb-6">
                            <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Time</label>
                            <select
                                id="time"
                                name="time"
                                onChange={handleChange}
                                value={formData.time}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                <option value="">Select Time</option>
                                {times.map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Make an appointment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;
