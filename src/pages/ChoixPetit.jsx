import React from "react";
import { NavLink } from "react-router-dom";
import tomate from '../assets/tomate.webp'

export default function ChoixPetit() {
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
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px",
      width: "100%",
      maxWidth: "1200px",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      padding: "20px",
      textAlign: "center",
      transition: "transform 0.3s ease",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "15px",
    },
    name: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    description: {
      fontSize: "1rem",
      marginBottom: "10px",
      lineHeight: "1.4",
    },
    price: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#43a047",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#2e7d32",
    },
  };

  const produits = [
    {
      id: 1,
      name: "Panier de tomates",
      description: "Tomates fraîches cueillies récemment et localement.",
      price: "2.70€ le panier",
      image: tomate,
    },
    {
      id: 2,
      name: "Panier de pommes",
      description: "Pommes fraîches cueillies récemment et localement.",
      price: "2.70€ le panier",
      image: './',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nos Produits</h1>
      <div style={styles.grid}>
        {produits.map((produit) => (
          <div
            key={produit.id}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img src={produit.image} alt={produit.name} style={styles.image} />
            <h2 style={styles.name}>{produit.name}</h2>
            <p style={styles.description}>{produit.description}</p>
            <p style={styles.price}>{produit.price}</p>
            <NavLink
              to='/achat'
              style={({ isActive }) =>
                isActive
                  ? { ...styles.button, ...styles.buttonActive }
                  : styles.button
              }
            >
              Acheter
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
