import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../images/favicon.png';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'gatsby';
import NavLink from './NavLink';
import { GatsbyContext } from '../../context/context';
import SocialLinks from '../../constants/socialLinks';

const Navbar = () => {
  const { isSidebarOpen, showSidebar, links } = useContext(GatsbyContext);

  const tempLinks = [
    ...new Set(
      links.map((link) => {
        return link.page;
      })
    ),
  ];
  console.log(tempLinks);

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="mgstudio_logo" />
          </Link>
          <SocialLinks styleClass="nav-icons" />
          {!isSidebarOpen && (
            <button className="toggle-btn" onClick={showSidebar}>
              <GoThreeBars />
            </button>
          )}
        </div>

        <ul className="nav-links">
          {tempLinks.map((page, index) => {
            return <NavLink key={index} page={page}></NavLink>;
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  background-color: transparent;
  z-index: 1;
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-items: space-evenly;
  align-items: center;
  position: fixed;

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    margin: auto auto;
    /* max-width: var(--max-width); */
  }

  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    img {
      display: flex;
      width: 60px;
      justify-self: flex-start;
      align-self: center;
      margin-left: 2rem;
    }
    ul,
    li {
      list-style-type: none;
    }

    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      margin-left: 54vw;
      margin-right: 8em;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--clr-white);
      background: var(--clr-grey-1);
      margin-right: 2rem;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-3);
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 940px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    ul,
    li {
      list-style-type: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 1rem;
      grid-gap: 0 1rem;
      align-items: center;
      justify-items: flex-end;
      margin-top: -4.2vh;
      height: 5rem;
    }
    .nav-links {
      display: grid;
      grid-template-columns: 62px 80px 140px 70px 122px 150px;
      max-width: 860px;
      justify-items: flex-end;
      height: 5rem;
      margin-right: 1em;
    }
    ul {
      text-decoration: none;
    }
    li {
      /* margin-bottom: 2rem; */
      position: relative;
    }
    /* ul li::marker {
    display: none;
} */
    a > img {
      margin-top: 0.5em;
    }
    button {
      color: '#f7f4f4';
      font-family: 'Raleway';
      background: transparent;
      border: transparent;
      font-size: 0.9rem;
      letter-spacing: 2px;
      font-weight: 400;
      padding: 10px 10px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
      margin-top: 3rem;
    }
  }
`;
export default Navbar;
