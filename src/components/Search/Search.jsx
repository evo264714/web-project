// components/Pages/Search/Search.jsx
import { useState } from 'react';
import HospitalList from '../HospialList/HospitalList';

const Search = () => {
  const [hospitals, setHospitals] = useState([]);

  const handleSearch = () => {
    // Mock data for demonstration purposes
    const nearbyHospitals = [
      { id: 1, name: 'United Hospital', distance: 2 },
      { id: 2, name: 'Upasham Healthpoit pvt ltd', distance: 5 },
    ];

    setHospitals(nearbyHospitals);
  };

  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Search for Nearby Hospitals</h2>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search Hospitals
      </button>
      <HospitalList hospitals={hospitals} />
    </div>
  );
};

export default Search;
