import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Met à jour quand on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); // ferme le menu si on repasse en desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    navbar: {
      backgroundColor: "#2e7d32", // vert principal
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      position: "sticky",
      top: 0,
    },
    brand: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      textDecoration: "none",
      color: "white",
    },
    links: {
      display: "flex",
      gap: "20px",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontWeight: "500",
      transition: "color 0.3s",
    },
    burger: {
      fontSize: "1.5rem",
      cursor: "pointer",
      display: "block",
    },
    mobileMenu: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      backgroundColor: "#388e3c",
      padding: "15px",
    },
  };

  return (
    <nav style={styles.navbar}>
      <a href="/" style={styles.brand}>
        SolidariTerre
      </a>

      {/* Liens desktop */}
      {!isMobile && (
        <div style={styles.links}>
          <a href="/" style={styles.link}>
            Accueil
          </a>
          <a href="/about" style={styles.link}>
            Nos agriculteurs
          </a>
          <a href="/contact" style={styles.link}>
            Notre engagement
          </a>
        </div>
      )}

      {/* Burger menu (mobile) */}
      {isMobile && (
        <div style={styles.burger} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      )}

      {/* Menu mobile */}
      {isMobile && isOpen && (
        <div style={styles.mobileMenu}>
          <a href="/" style={styles.link} onClick={() => setIsOpen(false)}>
            Accueil
          </a>
          <a href="/about" style={styles.link} onClick={() => setIsOpen(false)}>
            À propos
          </a>
          <a href="/contact" style={styles.link} onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
