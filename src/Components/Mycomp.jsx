import React, { useState } from "react";
import "../App.css";


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <button onClick={toggleTheme} className="switch-button">
        Switch Theme
      </button>
    </div>
  );
}

export default App;
