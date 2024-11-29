// Add this at the very top of the file
'use client';

import { useState } from 'react';

export default function Register() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    // Check if the response status is not in the success range (2xx)
    if (!response.ok) {
      // Handle error response (non-2xx status)
      const errorText = await response.text(); // Read the response as text first
      setMessage(`Error: ${errorText || 'Something went wrong'}`);
      return;
    }

    // Try to parse JSON if the response was successful
    try {
      const result = await response.json();
      setMessage(result.message || result.error || 'Registration successful');
    } catch (err) {
      // If the response is not valid JSON, handle the error
      setMessage('Failed to parse response JSON');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
      {message && <p>{message}</p>}
    </form>
  );
}
