import React from "react";

export default function ChoixGrand() {
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
      name: "Panier individuel",
      description: "Un assortiment de légumes de saison cultivés localement pour une personne. Environ 1kg.",
      price: "2.70€",
      image: './',
    },
    {
      id: 2,
      name: "Panier familial",
      description: "Assortiment de 5kg de fruits et de légumes. Format familial.",
      price: "10.55€ le panier",
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
            <button
              style={styles.button}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2e7d32")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#43a047")}
            >
              Voir les options
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
