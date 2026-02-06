import React, { useState, useEffect } from "react";
import "../styles/sidebar.css";
import imagen from "../assets/images/alejo.png";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setOpenSidebar(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setActiveSection(""); 
      return;              
    }
    
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);


  return (
    <div className="sidebar-container">
      <button className="btn" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`overlay ${openSidebar ? "show" : ""}`} onClick={toggleSidebar}></div>
      <aside className={`sidebar ${openSidebar ? "open" : ""}`}>
        <div className="div">
          <ul>
            <div className="img">
              <img src={imagen} alt="Alejo" />
            </div>
            <li><a onClick={toggleSidebar} href="#inicio" className={activeSection === "inicio" ? "active-link" : ""}>ALEJANDRO</a></li>
            <li><a onClick={toggleSidebar} href="#sobre-mi" className={activeSection === "sobre-mi" ? "active-link" : ""}>SOBRE MI</a></li>
            <li><a onClick={toggleSidebar} href="#proyectos" className={activeSection === "proyectos" ? "active-link" : ""}>PROYECTOS</a></li>
            <li><a onClick={toggleSidebar} href="#educacion" className={activeSection === "educacion" ? "active-link" : ""}>EDUCACION</a></li>
            <li><a onClick={toggleSidebar} href="#competencias" className={activeSection === "competencias" ? "active-link" : ""}>COMPETENCIAS</a></li>
            <li><a onClick={toggleSidebar} href="#contacto" className={activeSection === "contacto" ? "active-link" : ""}>CONTACTO</a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
