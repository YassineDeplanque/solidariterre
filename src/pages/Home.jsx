import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
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
      padding: "20px",
    },
    title: {
      fontSize: "3rem",
      marginBottom: "20px",
      color: "#2e7d32", // vert principal
    },
    subtitle: {
      fontSize: "1.5rem",
      marginBottom: "30px",
      maxWidth: "700px",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "#43a047",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1.2rem",
      cursor: "pointer",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
    },
    activeButton: {
      backgroundColor: "#2e7d32", // plus foncé quand actif
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>SolidariTerre</h1>
      <p style={styles.subtitle}>
        Achetez directement auprès de nos agriculteurs locaux 🌱
        et recevez des paniers livrés aux écoles à prix juste.
        Économie de temps, respect de la planète 🌍.
      </p>
      <NavLink
        to="/produit"
        style={({ isActive }) =>
          isActive
            ? { ...styles.button, ...styles.activeButton }
            : styles.button
        }
      >
        Découvrir nos produits
      </NavLink>
    </div>
  );
}
