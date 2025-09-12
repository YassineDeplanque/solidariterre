function Agriculteur() {
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
        cardHover: {
            transform: "translateY(-5px)",
        },
        image: {
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "15px",
        },
        name: {
            fontSize: "1.5rem",
            marginBottom: "10px",
            fontWeight: "bold",
        },
        description: {
            fontSize: "1rem",
            lineHeight: "1.4",
            color: "#2e7d32",
        },
    };

    const agriculteurs = [
        {
            id: 1,
            name: "Marie Dupont",
            description: "Agricultrice bio depuis 10 ans. Passionnée par les légumes de saison et la permaculture.",
            image: "/images/marie.jpg",
        },
        {
            id: 2,
            name: "Jean Martin",
            description: "Éleveur de poules et producteur d'œufs frais pour les écoles locales.",
            image: "/images/jean.jpg",
        },
        {
            id: 3,
            name: "Sophie Lambert",
            description: "Cultive des fruits rouges avec amour et respect de l'environnement.",
            image: "/images/sophie.jpg",
        },
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Nos Agriculteurs</h1>
            <div style={styles.grid}>
                {agriculteurs.map((agri) => (
                    <div
                        key={agri.id}
                        style={styles.card}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                    >
                        <img src={agri.image} alt={agri.name} style={styles.image} />
                        <h2 style={styles.name}>{agri.name}</h2>
                        <p style={styles.description}>{agri.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Agriculteur;