import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={`h-full w-full mx-auto py-2 
    ${darkMode ? "dark" : ""}`} >
      
    </div>
  );
}

export default App;
