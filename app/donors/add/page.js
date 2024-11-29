"use client";
import { useState } from 'react';

export default function AddDonor() {
  const [formData, setFormData] = useState({ name: '', age: '', bloodType: '', contact: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/donors', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    alert('Donor added successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <button type="submit">Submit</button>
    </form>
  );
}
