import React, { useState, useEffect } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveLink(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/Home" className="nav__logo">
          JT
        </a>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            {[
              { id: "home", label: "Home", icon: "bx-home-alt-2" },
              { id: "about", label: "About", icon: "bx-user" },
              { id: "skills", label: "Skills", icon: "bx-file" },
              { id: "services", label: "Services", icon: "bx-briefcase-alt-2" },
              { id: "portfolio", label: "Portfolio", icon: "bx-image-alt" },
              { id: "contact", label: "Contact Me", icon: "bx-message-square-dots" },
            ].map((item) => (
              <li key={item.id} className="nav__item">
                <a
                  href={`#${item.id}`}
                  className={`nav__link ${activeLink === item.id ? "active-link" : ""}`}
                  onClick={closeMenu}
                >
                  <i className={`bx ${item.icon} nav__icon`}></i> {item.label}
                </a>
              </li>
            ))}
          </ul>
          <i className="bx bx-x nav__close" onClick={toggleMenu}></i>
        </div>

        <div className="nav__btns">
          <i className={`bx bx-toggle-right change-theme ${theme}`} id="theme-button" onClick={toggleTheme}></i>
          <div className="nav__toggle" onClick={toggleMenu}>
            <i className="bx bx-grid-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
