const Footer = () => {
    return (
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.brand}>
            <h3>Blood Bank Management</h3>
          </div>
          <div style={styles.links}>
            <a href="/" style={styles.link}>Home</a>
            <a href="/about-us" style={styles.link}>About Us</a>
            <a href="/contact-us" style={styles.link}>Contact Us</a>
          </div>
          <div style={styles.social}>
            <a href="https://facebook.com" target="_blank" style={styles.icon}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={styles.socialIcon} /> 
              <p>facebook</p>
            </a>
            <a href="https://twitter.com" target="_blank" style={styles.icon}>
              <img src="/image/twitter.png" alt="Twitter" style={styles.socialIcon} />
              <p>twitter</p>
            </a>
            <a href="https://instagram.com" target="_blank" style={styles.icon}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" style={styles.socialIcon} />
              <p>instagram</p>
            </a>
          </div>
        </div>
        <div style={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Blood Bank Management. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  const styles = {
    footer: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "20px 10px",
      textAlign: "center" as "center",
      marginTop: "auto", // Ensures the footer is pushed to the bottom
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column" as "column",
      alignItems: "center",
    },
    brand: {
      marginBottom: "10px",
    },
    links: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "10px",
    },
    link: {
      margin: "0 10px",
      color: "#fff",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s",
    },
    social: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "10px",
    },
    icon: {
      margin: "0 10px",
      color: "#fff",
      textDecoration: "none",
    },
    socialIcon: {
      width: "24px",  // Adjust size of the icons
      height: "24px",
      transition: "transform 0.3s",
    },
    copyright: {
      marginTop: "10px",
      fontSize: "12px",
    },
  };
  
  export default Footer;
  