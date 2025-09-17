import React from "react";
import { NavLink } from "react-router-dom";

export default function Carbone() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#e8f5e9",
      color: "#1b5e20",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
    },
    title: {
      fontSize: "3rem",
      marginBottom: "20px",
      color: "#2e7d32",
    },
    subtitle: {
      fontSize: "1.5rem",
      marginBottom: "15px",
      maxWidth: "700px",
    },
    highlight: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#43a047",
      margin: "10px 0",
    },
    impact: {
      fontSize: "1.2rem",
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
      backgroundColor: "#2e7d32",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Merci pour votre achat 🌱</h1>

      <p style={styles.subtitle}>
        Vous venez de soutenir l’agriculture locale et de faire un geste concret
        pour la planète.
      </p>

      <div style={styles.highlight}>
        🌍 Votre bilan carbone :
      </div>
      <p style={styles.impact}>
        Aller au supermarché pour ce panier = <b>+4,5 kg CO₂</b><br />
        Acheter chez SolidariTerre = <b>+1,2 kg CO₂</b><br /><br />
        🎉 Vous avez économisé environ <b>3,3 kg de CO₂</b> sur cet achat !
      </p>

      <p style={styles.subtitle}>
        Chaque geste compte. Ensemble, nous réduisons les transports, soutenons
        nos agriculteurs et bâtissons un futur plus durable 🌿.
      </p>

      <NavLink
        to="/produit"
        style={({ isActive }) =>
          isActive
            ? { ...styles.button, ...styles.activeButton }
            : styles.button
        }
      >
        Découvrir d’autres paniers
      </NavLink>
    </div>
  );
}
