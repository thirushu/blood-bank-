// components/Sidebar.js
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Menu</h2>
      <ul>
        <li><Link href="/admin/dashboard">Dashboard</Link></li>
        <li><Link href="/admin/users">Manage Users</Link></li>
        <li><Link href="/staff/inventory">Inventory</Link></li>
        <li><Link href="/donor/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
