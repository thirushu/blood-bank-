"use client"; // Ensures this file runs on the client side

import Footer from "./footer/page";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Restricted states to Tamil Nadu and Karnataka
const states = ["Tamil Nadu", "Karnataka"];

// District data for Tamil Nadu and Karnataka
const districts = {
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Erode"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubli", "Mangalore", "Belagavi", "Bidar"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('');
  const [districtList, setDistrictList] = useState<string[]>([]);

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = event.target.value;
    setSelectedState(selectedState);
    // Set the districts for the selected state
    if (districts[selectedState]) {
      setDistrictList(districts[selectedState]);
    } else {
      setDistrictList([]);
    }
  };

  const handleBloodGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBloodGroup(event.target.value);
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(event.target.value);
  };

  const handleFindBlood = () => {
    // Redirect to the dashboard with selected blood group, state, and district as query params
    const query = new URLSearchParams({
      bloodGroup: selectedBloodGroup,
      state: selectedState,
      district: selectedDistrict
    }).toString();

    // Navigate to the dashboard with the query params
    window.location.href = `/admin/dashboard?${query}`;
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blood Bank Management</title>
      </head>
      <body>
        {/* Home Section (Top) */}
        <header style={styles.header}>
          <Image
            src="/image/logo.png"
            alt="Blood Bank Management"
            width={100}
            height={60}
            quality={75}
          />

          {/* Navigation Bar */}
          <nav style={styles.nav}>
            <ul style={styles.navList}>
              <li style={styles.navItem}><Link href="/">Home</Link></li>
              <li style={styles.navItem}><Link href="/about-us">About Us</Link></li>
              <li style={styles.navItem}><Link href="/contact-us">Contact Us</Link></li>
              <li style={styles.navItem}><Link href="/blog">Blog</Link></li>
            </ul>
          </nav>

          {/* Login and Register Buttons */}
          <div style={styles.buttonContainer}>
            <Link href="/auth/login">
              <button style={styles.button}>Login</button>
            </Link>
            <Link href="/auth/register">
              <button style={styles.button}>Register</button>
            </Link>
            <Link href="/admin/dashboard">
              <button style={styles.button}>Dashboard</button>
            </Link>
          </div>
        </header>

        {/* Remaining Content (Children) */}
        <main style={styles.mainContent}>
          {children}
        </main>

        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>Donate Blood, Save Lives</h1>
            <p style={styles.heroSubtitle}>Join the blood donation movement and help those in need.</p>
            <form style={styles.searchForm}>
              <select style={styles.select} onChange={handleBloodGroupChange}>
                <option>--Blood Group--</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
              </select>
              <select style={styles.select} onChange={handleStateChange}>
                <option>Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
              <select style={styles.select} onChange={handleDistrictChange}>
                <option>Select District</option>
                {districtList.length > 0 ? (
                  districtList.map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))
                ) : (
                  <option>No districts available</option>
                )}
              </select>
              <button type="button" onClick={handleFindBlood} style={styles.searchButton}>
                Find Blood
              </button>
            </form>
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </body>
    </html>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#343a40",
    backgroundImage: 'url("/images/header-background.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "yellow",
    width: "50%",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "40px",
  },
  navItem: {
    fontSize: "18px",
    color: "white",
    textDecoration: "none",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  hero: {
    backgroundImage: 'url("/image/maaa.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(90vh - 60px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "50px",
  },
  heroText: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "8px",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  heroSubtitle: {
    fontSize: "1.5rem",
    marginBottom: "30px",
  },
  searchForm: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  select: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
  },
  searchButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#FF5722",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  mainContent: {
    padding: "20px",
    backgroundColor: "#f4f4f4",
  }
};
