const ProfileCard = () => {
  return (
    <div style={styles.card}>
      <img
        src="https://via.placeholder.com/100" // Replace with the actual image URL
        alt="Profile"
        style={styles.image}
      />
      <h2 style={styles.name}>Jessica Randall</h2>
      <p style={styles.location}>London, United Kingdom</p>
      <p style={styles.bio}>Front-end developer and avid reader.</p>
      <button style={styles.button}>GitHub</button>
      <button style={styles.button}>Frontend Mentor</button>
      <button style={styles.button}>LinkedIn</button>
      <button style={styles.button}>Twitter</button>
      <button style={styles.button}>Instagram</button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#1a1a1a",
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0 5px",
  },
  location: {
    color: "#b3ff00",
    fontSize: "14px",
    margin: "0 0 10px",
  },
  bio: {
    fontSize: "14px",
    fontStyle: "italic",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#333333",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
    marginTop: "5px",
    width: "100%",
  },
};
export default ProfileCard;
