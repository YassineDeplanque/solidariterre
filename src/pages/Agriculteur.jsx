import agri1 from '../assets/agri1.jpg'
import agri2 from '../assets/agri2.jpg'
import agri3 from '../assets/agri3.jpg'

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
            name: "Maurice Dupont",
            description: "Agriculteur bio depuis 10 ans. Passionné par les légumes de saison et la permaculture.",
            image: agri1,
        },
        {
            id: 2,
            name: "Jean Martin",
            description: "Éleveur de poules et agriculteur local.",
            image: agri2,
        },
        {
            id: 3,
            name: "Jacques Lambert",
            description: "Cultive des légumes avec amour et respect de l'environnement.",
            image: agri3,
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