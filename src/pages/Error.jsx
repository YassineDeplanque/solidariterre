import React from "react";

export default function Error() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#e8f5e9", // vert très clair
      color: "#1b5e20", // vert foncé
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    title: {
      fontSize: "6rem",
      margin: 0,
      color: "#2e7d32", // vert principal
    },
    message: {
      fontSize: "1.5rem",
      margin: "10px 0 20px",
    },
    link: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#43a047", // bouton vert
      color: "white",
      textDecoration: "none",
      borderRadius: "8px",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oups... La page que vous cherchez n’existe pas.</p>
      <a
        href="/"
        style={styles.link}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2e7d32")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#43a047")}
      >
        Retour à l’accueil
      </a>
    </div>
  );
}
