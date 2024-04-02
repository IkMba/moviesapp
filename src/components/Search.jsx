import IonIcon from "@reacticons/ionicons";
import { useRef, useState } from "react";
import Icons from "./Icons";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { useKey } from "../hooks/useKey";

function Search() {
  const [showSearh, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputRef.current)
      navigate(`search/${query}`);
    setQuery("");
  });
  return (
    <div className={styles.search}>
      {!showSearh && (
        <Icons
          type="btn"
          name="search-outline"
          onClick={() => {
            setShowSearch(true);
          }}
        />
      )}
      {showSearh && (
        <input
          type="text"
          placeholder="Search movies"
          ref={inputRef}
          onChange={(e) => setQuery(e.target.value)}
        />
      )}
    </div>
  );
}

export default Search;
