import React from "react";
import styled from "styled-components";
import { Thumb } from "./Thumb";
import { Grid } from "./Grid";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config/config";

export const Favorites = ({ movies }) => {
  return (
    <Container>
      <Link to="/" className="breadcrumb">
        Back
      </Link>
      <div className="main__title">
        <h2>Favorite Movies</h2>
      </div>

      <Grid hider={false}>
        {movies.map((movie) => (
          <div className="search__items" key={movie.id}>
            <Thumb
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : ""
              }
              movieId={movie.id}
              clickable
            />
            <h4>{movie.title}</h4>
          </div>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: crimson;
  margin: 30px 0;
  text-transform: uppercase;

  .breadcrumb {
    border: 1px double white;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    margin: 15px;
    font-weight: 900;
    :hover {
      background: #0369a5;
      color: black;
    }
  }
  .main__title,
  h4 {
    text-align: center;
  }
  h4 {
    color: #079c07;
  }
`;
