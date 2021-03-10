import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const search = async () => {
      await axios.get("https://");
    };
    search();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
