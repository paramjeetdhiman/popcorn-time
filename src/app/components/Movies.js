import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Grid } from "./Grid";
import { Thumb } from "./Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config/config";
import styled from "styled-components";

export const Movies = ({
  state,
  setMovies,
  movies,
  setPageNumber,
  pageNumber,
}) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  console.log(movies);

  const addFavourite = (movie) => {
    let id = movie.id;
    let item = [...favoriteItems, id];
    if (!favoriteItems.includes(id)) {
      setFavoriteItems(Array.from(new Set(item)));
      setMovies([...movies, movie]);
    } else {
      setFavoriteItems(favoriteItems.filter((id) => movie.id !== id));
      setMovies(movies.filter((item) => item.id !== id));
    }
  };
  return (
    <Container>
      <Grid
        header="Search Results..."
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        hide>
        {state.results.map((movie) => (
          <div className="search__items" key={movie.id}>
            <FaHeart
              className={
                favoriteItems.includes(movie.id)
                  ? "favorite__item"
                  : "not_favorite__item"
              }
              onClick={() => addFavourite(movie)}
            />

            <Thumb
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : ""
              }
              movieId={movie.id}
              clickable
            />
          </div>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    color: crimson;
  }
  margin-top: 30px;
  padding-bottom: 30px;

  .search__items {
    position: relative;

    .not_favorite__item,
    .favorite__item {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 5px;
      right: 5%;
      z-index: 99999;
      cursor: pointer;
      :hover {
        transform: scale(1.2);
      }
    }
    .not_favorite__item {
      color: #fff;
    }
    .favorite__item {
      color: crimson;
    }
  }
`;
