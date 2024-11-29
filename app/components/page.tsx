// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Blood Bank</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/admin/dashboard">Admin</Link></li>
        <li><Link href="/donor/profile">Donor</Link></li>
        <li><Link href="/staff/inventory">Staff</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
 