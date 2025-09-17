import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #e8f5e9, #c8e6c9)",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    card: {
      backgroundColor: "#ffffffcc", // semi-transparent pour effet léger
      padding: "50px",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      maxWidth: "400px",
      width: "90%",
      textAlign: "center",
      position: "relative",
      zIndex: 2,
    },
    title: {
      fontSize: "2.5rem",
      color: "#2e7d32",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "10px",
      border: "1px solid #43a047",
      fontSize: "1rem",
    },
    button: {
      width: "100%",
      padding: "15px",
      marginTop: "20px",
      borderRadius: "12px",
      border: "none",
      backgroundColor: "#43a047",
      color: "white",
      fontSize: "1.2rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#2e7d32",
      transform: "scale(1.05)",
    },
    backgroundLeaf: {
      position: "absolute",
      width: "200px",
      height: "200px",
      backgroundColor: "#a5d6a7",
      borderRadius: "50%",
      top: "-50px",
      left: "-50px",
      zIndex: 1,
      filter: "blur(80px)",
    },
    backgroundLeaf2: {
      position: "absolute",
      width: "250px",
      height: "250px",
      backgroundColor: "#81c784",
      borderRadius: "50%",
      bottom: "-70px",
      right: "-70px",
      zIndex: 1,
      filter: "blur(100px)",
    },
    link: {
      marginTop: "15px",
      display: "block",
      color: "#2e7d32",
      textDecoration: "none",
      fontSize: "0.9rem",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux ajouter la logique d'authentification
    navigate("/produit"); // redirige après login
  };

  return (
    <div style={styles.container}>
      {/* Arrière-plan flou */}
      <div style={styles.backgroundLeaf}></div>
      <div style={styles.backgroundLeaf2}></div>

      {/* Carte de login */}
      <div style={styles.card}>
        <h1 style={styles.title}>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, styles.buttonHover)
            }
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#43a047")}
          >
            Se connecter
          </button>
        </form>
        <a href="/signup" style={styles.link}>
          Pas encore de compte ? Inscrivez-vous
        </a>
      </div>
    </div>
  );
}
