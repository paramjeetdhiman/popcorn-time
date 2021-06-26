import { Switch, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Navbar } from "./components/Navbar";
import { Favorites } from "./components/Favorites";
import { Movies } from "./components/Movies";
import { useHomeFetch } from "./hooks/useHomeFetch";
import { useState } from "react";

export const Routes = () => {
  const { state, setSearchTerm, searchTerm, setPageNumber, pageNumber } =
    useHomeFetch();
  const [movies, setMovies] = useState([]);

  return (
    <>
      <Navbar setSearchTerm={setSearchTerm} />

      <Switch>
        <Route exact path="/">
          {!searchTerm && state.results[0] ? (
            <Homepage />
          ) : (
            <Movies
              state={state}
              setMovies={setMovies}
              movies={movies}
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
            />
          )}
        </Route>
        <Route path="/favorites">
          <Favorites movies={movies} />
        </Route>
        <Route path="/movies" component={Movies} />
      </Switch>
    </>
  );
};
