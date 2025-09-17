import React from "react";

export default function Engagement() {
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
            width: "80px",
            height: "80px",
            objectFit: "contain",
            marginBottom: "15px",
        },
        name: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
        },
        description: {
            fontSize: "1rem",
            lineHeight: "1.5",
            color: "#2e7d32",
        },
    };

    const engagements = [
        {
            id: 1,
            name: "Produits Locaux",
            description: "Nous soutenons les agriculteurs locaux et garantissons des produits frais.",
            image: "/images/local.png",
        },
        {
            id: 2,
            name: "Respect de l'environnement",
            description: "Nos pratiques favorisent la durabilité et la protection de la planète.",
            image: "/images/eco.png",
        },
        {
            id: 3,
            name: "Équité",
            description: "Nous fournissons des paniers à prix juste pour les communautés.",
            image: "/images/education.png",
        },
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Nos Engagements</h1>
            <div style={styles.grid}>
                {engagements.map((engagement) => (
                    <div
                        key={engagement.id}
                        style={styles.card}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                    >
                        <img src={engagement.image} alt={engagement.name} style={styles.image} />
                        <h2 style={styles.name}>{engagement.name}</h2>
                        <p style={styles.description}>{engagement.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
