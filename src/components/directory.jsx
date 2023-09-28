//import

import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Directory() {
  const topics = [
    {
      name: "Welcome",
    },
    {
      name: "About",
    },
    {
      name: "Projects",
    },
  ];

  useEffect(() => {
    document.getElementById("infoTextId0").style.display = "block";
  }, []);

  return (
    <div id="directoryBox">
      <ul>
        <h1>Directory</h1>
        {topics.map((topic, idx) => {
          return (
            <Link
              onClick={(e) => {
                e.preventDefault();
                for (let key in topics) {
                  let topicIdx = document.getElementById(`infoTextId${key}`);
                  topicIdx.style.display = "none";
                  if (idx.toString() === key) {
                    topicIdx.style.display = "block";
                  }
                }
              }}
            >
              <li>{topic.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
