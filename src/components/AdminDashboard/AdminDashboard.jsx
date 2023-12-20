




import React, { useState, useEffect } from 'react';
import { useUser } from '../providers/userProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [prescriptions, setPrescriptions] = useState([{ medicine: '', morning: false, afternoon: false, night: false }]);
    const { currentUser } = useUser();

    useEffect(() => {
        if (Array.isArray(currentUser)) {
            const adminUser = currentUser.find(user => user?.role === 'admin');
            if (adminUser) {
                fetchAppointments();
            }
        }
    }, [currentUser]);

    const fetchAppointments = async () => {
        try {
            const response = await fetch('http://localhost:5000/appointments', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch appointments');
            }
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handlePrescriptionClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleFormChange = (index, event) => {
        const { name, value, type, checked } = event.target;
        setPrescriptions(prescriptions =>
            prescriptions.map((prescription, i) =>
                i === index ? { ...prescription, [name]: type === 'checkbox' ? checked : value } : prescription
            )
        );
    };

    const submitPrescription = async (prescriptionData, userId) => {
        // Add userId to each prescription in the array
        const prescriptionsWithUser = prescriptionData.map(prescription => ({
            ...prescription,
            userId: userId
        }));
    
        try {
            const response = await fetch('http://localhost:5000/prescriptions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(prescriptionsWithUser)
            });
            if (!response.ok) {
                throw new Error('Failed to submit prescription');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error submitting prescription:', error);
            throw new Error('Failed to submit prescription'); // Rethrow the error
        }
    };
    
    
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assuming `currentUser._id` holds the user's ID
            const userId = currentUser._id; // Adjust according to your user object structure
            const result = await submitPrescription(prescriptions, userId);
    
            if (result) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Prescription saved successfully.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                setIsModalOpen(false);
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to save prescription. ' + error.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };
    
    
    const addMedicine = () => {
        setPrescriptions([...prescriptions, { medicine: '', morning: false, afternoon: false, night: false }]);
    };

    if (!currentUser || !currentUser.some(user => user?.role === 'admin')) {
        return <div>Access Denied</div>;
    }

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">Patient Name</th>
                        <th scope="col" className="py-3 px-6">Phone Number</th>
                        <th scope="col" className="py-3 px-6">Email</th>
                        <th scope="col" className="py-3 px-6">Gender</th>
                        <th scope="col" className="py-3 px-6">Date</th>
                        <th scope="col" className="py-3 px-6">Time</th>
                        <th scope="col" className="py-3 px-6">Symptoms</th>
                        <th scope="col" className="py-3 px-6">Prescription</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {appointment.patientName}
                            </th>
                            <td className="py-4 px-6">{appointment.phoneNumber}</td>
                            <td className="py-4 px-6">{appointment.email}</td>
                            <td className="py-4 px-6">{appointment.gender}</td>
                            <td className="py-4 px-6">{appointment.selectDate}</td>
                            <td className="py-4 px-6">{appointment.time}</td>
                            <td className="py-4 px-6">{appointment.symptoms}</td>
                            <td className="py-4 px-6">
                                <button onClick={handlePrescriptionClick} className="text-blue-500 btn btn-outline btn-info border-none py-4 px-12  font-extrabold  text-2xl">
                                    <FontAwesomeIcon icon={faFileMedical} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Prescription Details</h3>
                            <form onSubmit={handleFormSubmit} className="mt-2">
                                {prescriptions.map((prescription, index) => (
                                    <div key={index} className="mb-3">
                                        <input type="text" name="medicine" value={prescription.medicine} onChange={(e) => handleFormChange(index, e)}
                                            placeholder="Medicine Name" className="w-full px-4 py-2 border rounded-lg" />
                                        <div className="flex justify-between mt-2">
                                            <label><input type="checkbox" name="morning" checked={prescription.morning} onChange={(e) => handleFormChange(index, e)} /> Morning</label>
                                            <label><input type="checkbox" name="afternoon" checked={prescription.afternoon} onChange={(e) => handleFormChange(index, e)} /> Afternoon</label>
                                            <label><input type="checkbox" name="night" checked={prescription.night} onChange={(e) => handleFormChange(index, e)} /> Night</label>
                                        </div>
                                    </div>
                                ))}
                                <button type="button" onClick={addMedicine} className="mt-2 mb-3 py-1 px-3 bg-blue-500 text-white rounded-lg"><FontAwesomeIcon icon={faPlus} /> Add Medicine</button>
                                <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg">Submit</button>
                            </form>
                            <div className="mt-2">
                                <button onClick={handleModalClose} className="text-gray-500">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
