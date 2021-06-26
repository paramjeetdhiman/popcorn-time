import React, { useState, useEffect } from "react";
import axios from "../config/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import styled from "styled-components";

export const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  /// handle  onClick play movie trailers
  const handleOnClick = (movie) => {
    const movieTitle =
      movie?.name || movie?.title || movie?.original_name || "";
    if (trailerURL !== "") {
      setTrailerURL("");
    } else {
      movieTrailer(movieTitle, { id: true })
        .then((videoId) => {
          setTrailerURL(videoId);
        })
        .catch((error) => {
          console.error(error);
          setTrailerURL("");
        });
    }
  };

  /// get movies from api
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      } catch (error) {
        console.log(error);
        throw Error(error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <Container>
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  key={movie.id}
                  onClick={() => handleOnClick(movie)}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.title}
                  className={`row__poster ${
                    isLargeRow && "row__poster__large"
                  }    `}
                />
              )
          )}
        </div>
      </div>

      {/* Play a video using Youtube  */}
      {trailerURL && (
        <YouTube
          videoId={trailerURL}
          opts={{ height: "390", width: "100%", playerVars: { autoplay: 1 } }}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 20px;
  .row {
    color: white;
    margin-left: 20px;

    h2 {
      margin-left: 20px;
      font-size: 1.4em;
      color: #eee;
    }
    .row__posters {
      display: flex;
      overflow-y: hidden;
      overflow-x: scroll;
      padding: 20px;

      .row__poster {
        max-height: 100px;
        object-fit: contain;
        margin-right: 10px;
        width: 100%;
        transition: transform 450ms;

        :hover {
          transform: scale(1.08);
          opacity: 1;
        }
      }
      .row__poster__large {
        max-height: 250px;
        :hover {
          transform: scale(1.09);
          opacity: 1;
        }
      }
    }

    .row__posters::-webkit-scrollbar {
      display: none;
    }
  }
`;
