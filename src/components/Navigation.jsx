import React, { useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav>
      <ul>
        {["about", "portfolio", "contact", "resume"].map((section) => (
          <li
            key={section}
            className={activeSection === section ? "active" : ""}
            onClick={() => handleClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
