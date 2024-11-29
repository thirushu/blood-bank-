'use client';

import { useState } from "react";

const BloodRequestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    setError("");
    setSuccess("");

    // Prepare the data for submission
    const requestData = { name, email, bloodGroup };

    try {
      const response = await fetch("/api/blood-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      // Handle the response from the API
      const result = await response.json();

      if (response.ok) {
        setSuccess(result.message);
        setName("");
        setEmail("");
        setBloodGroup("");
      } else {
        setError(result.message || "Failed to submit the request.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Request Blood</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bloodGroup">Blood Group</label>
          <input
            id="bloodGroup"
            type="text"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Request</button>
      </form>

      {/* Display success or error messages */}
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default BloodRequestForm;
