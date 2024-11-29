'use client';  // Add this directive at the top

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router for redirection

const DonorRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize router for navigation

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data to send
    const donorData = {
      name,
      email,
      bloodGroup,
    };

    try {
      const response = await fetch("/api/auth/donor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donorData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An unexpected error occurred.");
      }

      // Redirect to Thank You page upon success
      router.push("/thank-you");
    } catch (err: any) {
      console.error("Error during API call:", err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Register as a Donor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Blood Group</label>
          <input
            type="text"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>

      {/* Display error messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DonorRegister;
