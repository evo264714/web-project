import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const HospitalList = ({ area, hospitals }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hospitals[area].map((hospital, index) => (
        <div key={index} className="card card-bordered shadow-lg">
          <figure>
            <img src={hospital.imageUrl} alt={hospital.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{hospital.name}</h2>
            <div className="card-actions justify-end">
              {user ? <Link to='/appointment' className="btn btn-success">Get an Appointment</Link>: ''}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HospitalList;
