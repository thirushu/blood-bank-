// pages/index.js
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Blood Bank Management System</h1>
      <nav>
        <Link href="/admin/dashboard">Admin Dashboard</Link>
        <br />
        <Link href="/donor/profile">Donor Profile</Link>
        <br />
        <Link href="/staff/inventory">Staff Inventory</Link>
      </nav>
    </div>
  );
};

export default Home;
