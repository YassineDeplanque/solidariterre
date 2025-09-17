import React from "react";
import { NavLink } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Carbone() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
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
      marginTop: "20px",
    },
    activeButton: {
      backgroundColor: "#2e7d32",
    },
    chartContainer: {
      width: "80%",
      maxWidth: "600px",
      marginBottom: "30px",
    },
  };

  const data = {
    labels: ["Supermarché", "SolidariTerre"],
    datasets: [
      {
        label: "CO₂ émis",
        data: [4.5, 1.2],
        backgroundColor: ["#f44336", "#43a047"], // rouge vs vert
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Comparatif CO₂ par achat",
        font: { size: 18 },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y + ' kg CO₂';
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return value + ' kg CO₂';
          }
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Merci pour votre achat 🌱</h1>

      <p style={styles.subtitle}>
        Vous venez de soutenir l’agriculture locale et de faire un geste concret
        pour la planète.
      </p>

      <div style={styles.highlight}>🌍 Votre bilan carbone :</div>

      <div style={styles.chartContainer}>
        <Bar data={data} options={options} />
      </div>

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
