import { Link, NavLink, useParams } from "react-router-dom";
import styles from "./SideResults.module.css";
import { useState } from "react";
function SideResults({ results, setQuery }) {
  const tags = ["movie", "tv", "company", "keyword", "person", "collection"];
  const [movies, tv, companies, keywords, people, collections] = results;
  const [active, setActive] = useState(0);
  console.log(active);
  const params = useParams();
  return (
    <div className={styles.sideResults}>
      <div className={styles.sideCard}>
        <h4>Search Results: {params.movie}</h4>
        <ul>
          {tags.map((tag, i) => (
            <li
              key={tag}
              onClick={() => {
                setQuery(i);
                setActive(i);
              }}
              className={active === i ? styles.active : ""}
            >
              <Link>{tag}</Link>
              <span>{results[i].total_results}</span>
            </li>
          ))}

          <li>
            <Link>Network</Link>
            <span>0</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideResults;
