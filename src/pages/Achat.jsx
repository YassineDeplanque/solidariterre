import React from "react";
import { NavLink } from "react-router-dom";

export default function Achat() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      backgroundColor: "#e8f5e9",
      fontFamily: "Arial, sans-serif",
      color: "#1b5e20",
      minHeight: "100vh",
    },
    title: {
      fontSize: "3rem",
      marginBottom: "40px",
      color: "#2e7d32",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    label: {
      fontWeight: "bold",
      marginBottom: "5px",
    },
    input: {
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      width: "100%",
    },
    select: {
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      width: "100%",
    },
    button: {
      padding: "12px",
      backgroundColor: "#43a047",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#2e7d32",
    },
  };

  const ecoles = [
    "École élémentaire Victor Hugo",
    "Collège Jean Moulin",
    "Lycée Jean Jaurès",
    "École primaire Louise Michel",
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Finaliser votre achat</h1>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div>
          <label style={styles.label}>Nom sur la carte</label>
          <input type="text" placeholder="Nom Prénom" style={styles.input} />
        </div>
        <div>
          <label style={styles.label}>Numéro de carte</label>
          <input type="text" placeholder="1234 5678 9012 3456" style={styles.input} />
        </div>
        <div>
          <label style={styles.label}>Date d'expiration</label>
          <input type="text" placeholder="MM/AA" style={styles.input} />
        </div>
        <div>
          <label style={styles.label}>CVV</label>
          <input type="text" placeholder="123" style={styles.input} />
        </div>
        <div>
          <label style={styles.label}>Choisir l'école pour la livraison</label>
          <select style={styles.select}>
            {ecoles.map((ecole, index) => (
              <option key={index} value={ecole}>{ecole}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2e7d32")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#43a047")}
        >
          Valider l'achat
        </button>
      </form>
    </div>
  );
}
