// components/HospitalList/HospitalList.jsx

const HospitalList = ({ hospitals }) => {
  return (
    <div className="mt-2">
      <h2 className="text-2xl font-bold mb-4">Hospital Results</h2>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id} className="mb-4 border p-4 rounded">
            <p className="text-xl font-bold">{hospital.name}</p>
            <p>Distance: {hospital.distance} miles</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;
