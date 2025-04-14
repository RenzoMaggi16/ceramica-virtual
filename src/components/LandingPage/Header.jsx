import React, { useEffect, useState } from "react";
import "./LandingPage.css"; // Asegurate de tener los estilos acá

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <div className="header-logo">Ceramica Virtual</div>
        <nav className="header-nav">
          <div className="nav-item">Por si no lo sabias</div>
          <div className="nav-item">Contactanos</div>
          <div className="nav-button">Acceder</div>
        </nav>
        <div className="header-menu-mobile">
          <i className="ti ti-menu-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
