"use client";
import { useEffect, useState } from 'react';

export default function ListDonors() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetch('/api/donors')
      .then((res) => res.json())
      .then(setDonors);
  }, []);

  return (
    <ul>
      {donors.map((donor) => (
        <li key={donor.id}>{donor.name} ({donor.bloodType})</li>
      ))}
    </ul>
  );
}
