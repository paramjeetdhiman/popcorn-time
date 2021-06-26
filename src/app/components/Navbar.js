import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import logo from "../images/Popcorn_Time_logo.png";
import styled from "styled-components";

export const Navbar = ({ setSearchTerm }) => {
  const [toggle, toggleNav] = useState(false);

  const handleClick = () => {
    setSearchTerm("");
  };

  return (
    <>
      <Nav>
        <Link to="/" onClick={handleClick}>
          <div className="company_name">
            <Profile src={logo} alt="logo" />
            <Logo>Popcorn Time</Logo>
          </div>
        </Link>
        <Menu>
          <Item>
            <Searchbar setSearchTerm={setSearchTerm} />
          </Item>
        </Menu>
        <Menu>
          <Item>
            <Link to="/favorites">
              <FaHeart />
            </Link>
          </Item>
          <Item>
            <Link>
              <Profile
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="profile"
                className="profile_image"
              />
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link>Movies</Link>
          </Item>
          <Item>
            <Link>Tv Shows</Link>
          </Item>
          <Item>
            <Link to="/favorites">Favorites</Link>
          </Item>
          <Item>
            <Link>Logout</Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .company_name {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    color: white;
    text-decoration: none;

    :hover {
      cursor: pointer;
    }
  }
`;

const Logo = styled.h1`
  font-size: 20px;
  color: white;
`;

const Profile = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  object-fit: contain;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  a {
    color: white;
    text-decoration: none;

    :hover {
      cursor: pointer;
    }
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  z-index: 999;
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;
