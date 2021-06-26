import { useState, useEffect } from "react";
import API from "../config/Api";

/// initial state
const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

//// Custom Hook for fetchMovies, pagination, searchItem

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,

        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  ///Initial render and search
  useEffect(() => {
    setState(initialState);
    fetchMovies(pageNumber, searchTerm);
  }, [searchTerm, pageNumber]);

  return {
    state: state,
    setSearchTerm,
    pageNumber,
    setPageNumber,
    searchTerm,
  };
};
