import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  const [mode, setMode] = useState("Light");
  const handleMode = (e) => {
    if (mode === "Light") {
      setMode("Dark");
      document.getElementsByTagName("html")[0].classList.add("dark");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
      setMode("Light");
    }
  };
  return (
    <header className="shadow-md dark:bg-DarkModeElements dark:text-DarkModeText">
      <div className="flex items-center justify-between p-5 mx-auto max-w-7xl">
        <Link to={"/"}>
          <h1 className="font-semibold">Where in the world?</h1>
        </Link>
        <button onClick={handleMode} className="flex items-center gap-1">
          {mode === "Light" ? <BsSun /> : <FaMoon />} <span>{mode} Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
