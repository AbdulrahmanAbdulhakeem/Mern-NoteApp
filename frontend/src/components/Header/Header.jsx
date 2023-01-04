import { useState } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header({ darkMode, toggleDarkMode }) {
  // const [isActive, setIsActive] = useState(false)

  //   const openNav = () => {
  //       setIsActive(prevOpen => !prevOpen)
  //   }

  return (
    <div>
      <div className="bg-slate-800 text-zinc-50 h-20 flex justify-between px-3 items-center">
        <div>
          <h1 className="text-lg">Note Book</h1>
        </div>
        <div className="">{darkMode ? <BsMoonFill onClick={toggleDarkMode} /> : <BsSun onClick={toggleDarkMode} />}</div>
      </div>
    </div>
  );
}

export default Header;
