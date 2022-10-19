import "./App.css";
import Card from "react-bootstrap/Card";
import { createContext, useState } from "react";
import Switch from "react-switch";
// import Button from "react-bootstrap/Button";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Card className="text">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="switch">
          <label className="lb">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </label>
          <Switch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
