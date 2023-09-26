//import

import { Link } from "react-router-dom";
import Gmail from "./headerComponents/gmail";
import Github from "./headerComponents/github";
import Linkedin from "./headerComponents/linkedin";

export default function Header() {
  const tabs = [
    "Home",
    "About",
    //"Resume",
    //"Services",
    //"Skills",
    "Projects",
    "GitHub",
    "YouTube",
  ];
  /*{tabs.map((tab, idx) => {
          return (
            <Link key={`link${idx}`} className="links" to={tab.toLowerCase()}>
              {tab}
            </Link>
          );
        })}*/
  return (
    <header className="headerBar">
      <h1>
        Mike Wadsworth
        <span style={{ fontSize: "12px", marginLeft: "2cm" }}>
          Web Developer
        </span>
      </h1>
      <div className="headerLinks">
        <Gmail />
        <Github />
        <Linkedin />
      </div>
    </header>
  );
}
