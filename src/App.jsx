import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainContainer">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

/*  maybe use this later
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path
    fill="green"
    d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
    ></path>
  </svg>

*/

export default App;
