import { useState } from "react";
import { Header } from "./components";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className= {`${darkMode ? "dark" : ""}`} >
      <Header darkMode = {darkMode} toggleDarkMode = {toggleDarkMode} />

      <p>Piuussi</p>
      <h1>bgbgb</h1>
      <h1>bgbgb</h1>
      <h1>bgbgb</h1>
      <h1>bgbgb</h1>
      <h1>bgbgb</h1>
      <h1>bgbgb</h1>
      <h1>bgbgb</h1>
      <h1>bgbgb</h1>
      <h1>bgbgb</h1>
      <h1>bgbgb</h1>
    </div>
  );
}

export default App;
