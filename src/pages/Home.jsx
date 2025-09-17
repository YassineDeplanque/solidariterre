import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#e8f5e9",
      color: "#1b5e20",
      padding: "0",
      margin: "0",
    },
    hero: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "80vh",
      textAlign: "center",
      padding: "50px 20px",
      backgroundColor: "#c8e6c9",
    },
    title: {
      fontSize: "4rem",
      marginBottom: "20px",
      color: "#2e7d32",
    },
    subtitle: {
      fontSize: "1.5rem",
      marginBottom: "30px",
      maxWidth: "700px",
      lineHeight: "1.5",
    },
    button: {
      padding: "15px 30px",
      backgroundColor: "#43a047",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1.2rem",
      cursor: "pointer",
      textDecoration: "none",
      transition: "all 0.3s ease",
    },
    section: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "50px 20px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      marginTop: "30px",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      flex: "1 1 250px",
      maxWidth: "300px",
      textAlign: "center",
    },
    cardIcon: {
      fontSize: "3rem",
      marginBottom: "15px",
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    cardText: {
      fontSize: "1rem",
      lineHeight: "1.4",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>SolidariTerre</h1>
        <p style={styles.subtitle}>
          Achetez directement auprès de nos agriculteurs locaux 🌱 et recevez
          des paniers livrés aux écoles à prix juste. Économie de temps,
          respect de la planète 🌍.
        </p>
        <NavLink to="/produit" style={styles.button}>
          Découvrir nos produits
        </NavLink>
      </div>

      {/* Avantages Section */}
      <div style={styles.section}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Pourquoi choisir SolidariTerre ?
        </h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🌾</div>
            <div style={styles.cardTitle}>Soutien aux agriculteurs</div>
            <div style={styles.cardText}>
              En achetant nos paniers, vous aidez les producteurs locaux à vivre
              dignement de leur travail.
            </div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🌍</div>
            <div style={styles.cardTitle}>Respect de la planète</div>
            <div style={styles.cardText}>
              Moins de transports, moins de déchets, plus de respect pour
              l’environnement.
            </div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🥦</div>
            <div style={styles.cardTitle}>Produits frais et sains</div>
            <div style={styles.cardText}>
              Des paniers remplis de fruits et légumes locaux, de saison et de
              qualité.
            </div>
          </div>
        </div>
      </div>

      {/* Comment ça marche Section */}
      <div style={{ ...styles.section, backgroundColor: "#dcedc8" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Comment ça marche ?
        </h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🛒</div>
            <div style={styles.cardTitle}>1. Choisissez votre panier</div>
            <div style={styles.cardText}>
              Sélectionnez les produits que vous souhaitez recevoir.
            </div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🚚</div>
            <div style={styles.cardTitle}>2. Livraison à l’école</div>
            <div style={styles.cardText}>
              Nous livrons directement aux écoles, pratique et écologique.
            </div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🎉</div>
            <div style={styles.cardTitle}>3. Profitez et soutenez</div>
            <div style={styles.cardText}>
              Savourez vos produits frais et soutenez l’agriculture locale.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
