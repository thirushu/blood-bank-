export default function ListRequests() {
    return <div>Hello World</div>;
  }

// /requests/list/page.js

"use client";

import { useState, useEffect } from 'react';

export default function ListRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('/api/requests')
      .then((response) => response.json())
      .then((data) => setRequests(data));
  }, []);

  return (
    <div>
      <h1>Blood Requests</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            {request.recipient} - {request.bloodType} ({request.unitsNeeded} units)
          </li>
        ))}
      </ul>
    </div>
  );
}
