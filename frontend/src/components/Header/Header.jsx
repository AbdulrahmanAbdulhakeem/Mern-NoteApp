import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { FaSignOutAlt,FaUserAlt } from "react-icons/fa";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { Link , useNavigate } from "react-router-dom";

function Header({ darkMode, toggleDarkMode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  }

  return (
    <div>
      <div className="bg-slate-500 text-zinc-50 h-20 flex justify-between px-3 items-center">
        <div className="flex gap-48">
          <h1 className="text-lg">Note Book</h1>
          <h1 className="flex items-center">
            Welcome {user && user.name}
            <FaUserAlt className="rounded-lg p-1 text-slate-500 ml-2 bg-white h-6 w-6" />
          </h1>
        </div>
        <div className="">
          {darkMode ? (
            <BsMoonFill size={20} onClick={toggleDarkMode} />
          ) : (
            <BsSun size={20} onClick={toggleDarkMode} />
          )}
           <button
                onClick={onLogout}
                className="flex items-center p-4 bg-emerald-700 text-neutral-700 rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-neutral-100"
              >
                Logout
                <FaSignOutAlt className="ml-2" />
              </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
