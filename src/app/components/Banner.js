import React from "react";
import styled from "styled-components";

export const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        opacity: 0.9,
      }}>
      <Container>
        <h1>Welcome.</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      </Container>
    </header>
  );
};

const Container = styled.div`
  width: 100%;
  height: 30em;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4em;
    font-weight: 900;
    line-height: 1.3;
  }
  p {
    font-size: 18px;
    font-weight: 400;
  }
`;
