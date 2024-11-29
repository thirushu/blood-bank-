import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/nnn.jpg")', // Path to your image in the public folder
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
        height: "100vh", // Full screen height
        display: "flex", // Makes the container a flexbox to center content
        flexDirection: "column", // Stacks children vertically
        justifyContent: "center", // Vertically centers the content
        alignItems: "center", // Horizontally centers the content
        color: "white", // Makes the text white for better contrast
        textAlign: "center", // Centers the text horizontally
        padding: "20px", // Adds padding
      }}
    >
      {/* Image displaying the blood bank */}
      <Image
        src="/image/site4.jpg" // Image from the public folder
        alt="Blood Bank" // Alt text for accessibility
        width={700} // Width of the image
        height={500} // Height of the image
      />

      {/* Welcome Text */}
      <h1
        style={{
          fontSize: "3rem", // Large text size
          fontWeight: "bold", // Bold font
          marginTop: "20px",
          backgroundColor: "rgba(255, 87, 34, 0.8)", // Semi-transparent orange background
          color: "white", // Text color
          padding: "15px 30px", // Padding for spacing
          borderRadius: "10px", // Rounded corners
        }}
      >
        !...Welcome To Blood Bank Management-System...!
      </h1>
      <p
        style={{
          fontSize: "1.5rem", // Slightly smaller text
          marginTop: "10px",
          backgroundColor: "rgba(76, 175, 80, 0.8)", // Semi-transparent green background
          color: "white", // Text color
          padding: "10px 20px", // Padding for spacing
          borderRadius: "10px", // Rounded corners
          maxWidth: "700px", // Limit width for better readability
        }}
      >
        Your platform for managing blood donations and requests.
      </p>

      {/* Buttons for Admin, Donor, and Request */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link
          href="/admin"
          style={{
            backgroundColor: "#FF5722",
            padding: "15px 30px",
            color: "white",
            textDecoration: "none",
            fontSize: "1rem",
            borderRadius: "5px",
          }}
        >
          Admin
        </Link>
        <Link
          href="/donor/register"
          style={{
            backgroundColor: "#4CAF50",
            padding: "15px 30px",
            color: "white",
            textDecoration: "none",
            fontSize: "1rem",
            borderRadius: "5px",
          }}
        >
          Become a Donor
        </Link>
        <Link
          href="/request-blood"
          style={{
            backgroundColor: "#2196F3",
            padding: "15px 30px",
            color: "white",
            textDecoration: "none",
            fontSize: "1rem",
            borderRadius: "5px",
          }}
        >
          Request Blood
        </Link>
      </div>
    </div>
  );
}
