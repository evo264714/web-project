// Prescriptions.jsx
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './../providers/userProvider';

const Prescriptions = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const { currentUser } = useContext(UserContext); 

    useEffect(() => {
        if (currentUser && currentUser._id) {
            fetch(`http://localhost:5000/prescriptions/${currentUser._id}`)
                .then(response => response.json())
                .then(data => setPrescriptions(data))
                .catch(error => console.error('Error fetching prescriptions:', error));
        }
    }, [currentUser]);

    return (
        <div>
            <h2>Your Prescriptions</h2>
            <ul>
                {prescriptions.map((prescription, index) => (
                    <li key={index}>
                        <p>Medicine: {prescription.medicine}</p>
                        <p>Morning: {prescription.morning ? 'Yes' : 'No'}</p>
                        <p>Afternoon: {prescription.afternoon ? 'Yes' : 'No'}</p>
                        <p>Night: {prescription.night ? 'Yes' : 'No'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Prescriptions;
