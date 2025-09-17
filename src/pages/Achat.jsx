import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Achat() {
  const navigate = useNavigate();

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
  };

  const ecoles = [
    "École Desbordes-Valmore",
    "École Samain-Trulin",
    "École Chénier-Séverine",
    "École Ferry",
    "École Cabanis",
    "École Lakanal-Campan",
    "École Briand-Buisson",
    "École Berthelot-Verne",
    "École Cornette",
    "École Descartes-Montesquieu",
    "École Boufflers-Monge",
    "École Lalo-Clément",
    "École Germain",
    "École Michelet",
    "École Pasteur",
    "École Turgot",
    "École Briand",
    "École Buisson",
    "École Moulin-Pergaud",
    "École Bracke-Desrousseaux",
    "École Painlevé",
    "École Wagner",
    "École Duruy",
    "École Arago",
    "École de Saint-Exupéry",
    "École Launay",
    "École Dupleix",
    "École Madame Roland",
    "École Brunschvicg-Rousseau",
    "École Anatole France",
    "École Littré",
    "École Jouhaux",
    "École Madame de Maintenon",
    "École Lamartine",
    "École Branly",
    "École Diderot",
    "École Quinet-Rollin",
    "École Lavoisier",
    "École Ampère",
    "École Boucher de Perthes",
    "École Provinces",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Exemple d’impacts illustratifs
    const kmEvites = 3;
    const eauEconomisee = 80;
    const legumesSauves = 2;

    Swal.fire({
      title: "🎉 Merci pour votre achat !",
      html: `
        <p>🌍 Avec votre panier vous avez :</p>
        <ul style="text-align:left; margin-top:10px; font-size:1.1rem;">
          <li>🚗 Évité ${kmEvites} km de voiture</li>
          <li>🚿 Économisé ${eauEconomisee} L d'eau</li>
          <li>🍅 Sauvé ${legumesSauves} kg de légumes</li>
        </ul>
      `,
      confirmButtonText: "Voir mon bilan carbone",
      confirmButtonColor: "#43a047",
    }).then(() => {
      navigate("/carbone");
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Finaliser votre achat</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div>
          <label style={styles.label}>Nom sur la carte</label>
          <input type="text" placeholder="Nom Prénom" style={styles.input} required />
        </div>
        <div>
          <label style={styles.label}>Numéro de carte</label>
          <input type="text" placeholder="1234 5678 9012 3456" style={styles.input} required />
        </div>
        <div>
          <label style={styles.label}>Date d'expiration</label>
          <input type="text" placeholder="MM/AA" style={styles.input} required />
        </div>
        <div>
          <label style={styles.label}>CVV</label>
          <input type="text" placeholder="123" style={styles.input} required />
        </div>
        <div>
          <label style={styles.label}>Choisir l'école pour la livraison</label>
          <select style={styles.select} required>
            <option value="">Sélectionnez une école</option>
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
