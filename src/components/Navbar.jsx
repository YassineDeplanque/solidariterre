import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    navbar: {
      backgroundColor: "#2e7d32",
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
    activeLink: {
      color: "#a5d6a7", // vert clair pour indiquer la page active
      fontWeight: "bold",
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
      <NavLink to="/" style={styles.brand}>
        SolidariTerre
      </NavLink>

      {/* Liens desktop */}
      {!isMobile && (
        <div style={styles.links}>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/agriculteur"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
          >
            Nos agriculteurs
          </NavLink>
          <NavLink
            to="/produit"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
          >
            Nos produits
          </NavLink>
          <NavLink
            to="/engagement"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
          >
            Notre engagement
          </NavLink>
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
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/agriculteur"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
            onClick={() => setIsOpen(false)}
          >
            Nos agriculteurs
          </NavLink>
          <NavLink
            to="/produit"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
            onClick={() => setIsOpen(false)}
          >
            Nos produits
          </NavLink>
          <NavLink
            to="/engagement"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
            onClick={() => setIsOpen(false)}
          >
            Notre engagement
          </NavLink>
        </div>
      )}
    </nav>
  );
}
