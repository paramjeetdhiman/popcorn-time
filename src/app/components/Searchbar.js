import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Searchbar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    /// clear timer so we dont have lot of timer that run in background
    return () => {
      clearTimeout(timer);
    };
  }, [setSearchTerm, state]);

  return (
    <div>
      <Content>
        <FaSearch className="search-icon" />
        <input
          type="search"
          placeholder="Search Movies..."
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
          className="search__input"
        />
      </Content>
    </div>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .search-icon {
    position: absolute;
    left: 10px;
    top: 7px;
    color: #222;
  }
  input {
    padding: 5px;
    font-size: 18px;
    padding-left: 40px;
    border-radius: 10px;
    border: 0;
    :focus {
      outline: none;
    }
  }
`;
