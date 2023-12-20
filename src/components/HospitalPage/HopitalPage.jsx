import React, { useState } from 'react';
import HospitalList from '../HospitalList/HospitalList';

const hospitalData = {
  'Badda': [
    { name: 'Popular Diagnostic Center', imageUrl: 'https://i.ibb.co/RTbht5C/4a.jpg?fbclid=IwAR3zwQ7bk2avXtDfIFiO6VQblyY5uyxnx_eBUvNzaXe9kZ79YUkjYg2vZbU' },
    { name: 'Badda General Hospital Pvt. Ltd.', imageUrl: 'https://i.ibb.co/0FX7vvH/apollo-hospitals-to-operate-manage-375-beds-tertiary-hospital-in-chittagong-bangladesh.jpg' },
    { name: 'AMZ Hospital ltd', imageUrl: 'https://i.ibb.co/GszcBHy/united-hospital.jpg' }
  ],
  'Gulshan': [
    { name: 'United Hospital Limited', imageUrl: 'https://i.ibb.co/dB9gcMj/image.jpg' },
    { name: 'Cure Medical Center', imageUrl: 'https://i.ibb.co/9b7xPmF/Canada-has-a-health-care-investment-problem.jpg' },
    { name: 'Gulshan Shasthosheba Kendra', imageUrl: 'https://i.ibb.co/HzsM6PQ/1200px-Changi-General-Hospital-Jun-07.jpg' }
  ],
  'Bashundhara': [
    { name: 'Appollo Hospital', imageUrl: 'https://i.ibb.co/DrxYcDN/TTSH-Fascade.jpg' },
    { name: 'Evercare Hospital', imageUrl: 'https://i.ibb.co/hCqbB9g/SGH-2.jpg' },
    { name: 'Bashundhara Hospital Limited', imageUrl: 'https://i.ibb.co/GszcBHy/united-hospital.jpg' }
  ]
};
const headerStyle = {
    background: 'linear-gradient(to right, #2c3e50, #1a1a1a)',
    color: 'white',
}
const HospitalPage = () => {
  const [selectedArea, setSelectedArea] = useState('Badda');

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="area-select" className="block text-sm font-medium text-gray-700">Select Area</label>
        <select
        style={headerStyle}
          id="area-select"
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
          className="mt-1 block w-64 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
         
          <option className='text-white bg-slate-500' value="Badda">Badda</option>
          <option className='text-white bg-slate-500' value="Gulshan">Gulshan</option>
          <option className='text-white bg-slate-500' value="Bashundhara">Bahundhara</option>
        </select>
      </div>
      <HospitalList area={selectedArea} hospitals={hospitalData} />
    </div>
  );
};

export default HospitalPage;
