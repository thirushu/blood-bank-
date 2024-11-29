import Image from "next/image";

export default function AboutUs() {
  return (
    <div style={styles.container}>
      {/* Image Section */}
      <div style={styles.imageContainer}>
        <Image
          src="/image/site 1.jpg" // Ensure you have an image in your public folder
          alt="Blood Bank Management"
          width={600}
          height={400}
          style={styles.image}
        />
      </div>

      {/* Content Section */}
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to the <strong>Blood Bank Management System</strong>. We are dedicated to connecting blood donors
        with those in need of life-saving transfusions. Our goal is to provide a seamless and efficient process for
        both donors and recipients, ensuring that blood donations are safely stored and distributed when needed most.
      </p>

      <h2 style={styles.subheading}>Our Mission</h2>
      <p style={styles.paragraph}>
        Our mission is to help ensure that everyone who needs blood has access to it. By creating a platform where
        donors can easily register and contribute to the cause, we strive to make a difference in the lives of many
        people around the world.
      </p>

      <h2 style={styles.subheading}>Why Donate Blood?</h2>
      <p style={styles.paragraph}>
        Blood donation is a simple yet powerful way to save lives. One donation can help multiple patients in need.
        Your contribution could be the difference between life and death for someone in an emergency.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#333',
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  image: {
    borderRadius: '8px',
    objectFit: 'cover',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#d32f2f', // Red color for the heading
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '15px',
    textAlign: 'justify',
  },
  subheading: {
    fontSize: '1.8rem',
    color: '#1976d2', // Blue color for subheadings
    marginTop: '20px',
  },
};
