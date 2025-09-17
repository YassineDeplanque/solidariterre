import React from "react";
import { NavLink } from "react-router-dom";

export default function Engagement() {
  const styles = {
    hero: {
      backgroundColor: "#2e7d32",
      color: "white",
      padding: "80px 20px",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    heroSubtitle: {
      fontSize: "1.5rem",
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    section: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 20px",
      gap: "60px",
      flexWrap: "wrap",
      backgroundColor: "#e8f5e9",
    },
    image: {
      width: "180px",
      height: "180px",
      objectFit: "contain",
      flexShrink: 0,
    },
    textBlock: {
      maxWidth: "600px",
    },
    sectionTitle: {
      fontSize: "2.2rem",
      fontWeight: "bold",
      color: "#2e7d32",
      marginBottom: "15px",
    },
    description: {
      fontSize: "1.2rem",
      lineHeight: "1.7",
      color: "#1b5e20",
    },
    altSection: {
      backgroundColor: "#f0fdf4",
    },
    statsSection: {
      backgroundColor: "#ffffff",
      padding: "60px 20px",
      textAlign: "center",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "30px",
      maxWidth: "900px",
      margin: "0 auto",
    },
    statCard: {
      backgroundColor: "#e8f5e9",
      borderRadius: "12px",
      padding: "30px",
      color: "#1b5e20",
    },
    statNumber: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#2e7d32",
      marginBottom: "10px",
    },
    statLabel: {
      fontSize: "1.1rem",
    },
    ctaSection: {
      backgroundColor: "#2e7d32",
      color: "white",
      textAlign: "center",
      padding: "80px 20px",
    },
    ctaTitle: {
      fontSize: "2.5rem",
      marginBottom: "20px",
    },
    ctaButton: {
      display: "inline-block",
      padding: "15px 30px",
      backgroundColor: "#43a047",
      color: "white",
      borderRadius: "8px",
      fontSize: "1.2rem",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
    },
  };

  const engagements = [
    {
      id: 1,
      name: "Sauver les produits locaux",
      description:
        "Des fruits et légumes de nos agriculteurs locaux, bons mais pas assez beaux pour les magasins, sont proposés dans nos paniers à prix avantageux.",
      image: "/images/local.png",
    },
    {
      id: 2,
      name: "Livraison verte",
      description:
        "Un livreur en véhicule 100 % électrique effectue une tournée par jour pour réduire les émissions et les trajets inutiles.",
      image: "/images/eco.png",
    },
    {
      id: 3,
      name: "Points relais écoles",
      description:
        "Vos paniers sont livrés directement dans les écoles de la ville pour que les parents puissent les récupérer facilement sans perdre de temps.",
      image: "/images/education.png",
    },
    {
      id: 4,
      name: "Gains multiples",
      description:
        "Gain de temps, d’argent et de santé… et vous contribuez à préserver la planète en même temps 🌍.",
      image: "/images/impact.png",
    },
  ];

  const stats = [
    { number: "250+", label: "Fruits & légumes sauvés chaque semaine" },
    { number: "1.2t", label: "CO₂ évité chaque mois" },
    { number: "40+", label: "Écoles partenaires" },
  ];

  return (
    <div>
      {/* Hero section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Nos Engagements</h1>
        <p style={styles.heroSubtitle}>
          Sauver des produits locaux, réduire les trajets, faciliter l’accès aux
          paniers bio et protéger la planète. Voici comment nous agissons au
          quotidien.
        </p>
      </div>

      {/* Engagements sections */}
      {engagements.map((engagement, index) => (
        <div
          key={engagement.id}
          style={{
            ...styles.section,
            ...(index % 2 === 1 ? styles.altSection : {}),
            flexDirection: index % 2 === 1 ? "row-reverse" : "row",
          }}
        >
          <img
            src={engagement.image}
            alt={engagement.name}
            style={styles.image}
          />
          <div style={styles.textBlock}>
            <h2 style={styles.sectionTitle}>{engagement.name}</h2>
            <p style={styles.description}>{engagement.description}</p>
          </div>
        </div>
      ))}

      {/* Stats section */}
      <div style={styles.statsSection}>
        <div style={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} style={styles.statCard}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Envie de tester nos paniers ?</h2>
        <NavLink
          to="/produit"
          style={styles.ctaButton}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2e7d32")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#43a047")}
        >
          Découvrir nos produits
        </NavLink>
      </div>
    </div>
  );
}
