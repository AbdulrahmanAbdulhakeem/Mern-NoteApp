import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={`h-full w-full mx-auto py-2 
    ${darkMode ? "dark" : ""}`} >
      <Header />
    </div>
  );
}

export default App;
