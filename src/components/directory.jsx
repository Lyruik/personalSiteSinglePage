//import

import { Link } from "react-router-dom";

export default function Directory() {
  const topics = [
    {
      name: "About",
    },
    {
      name: "Projects",
    },
    {
      name: "Github",
    },
    {
      name: "Youtube",
    },
  ];

  return (
    <div id="directoryBox">
      <ul>
        <h1>Directory</h1>
        {topics.map((topic) => {
          return (
            <Link>
              <li>{topic.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
