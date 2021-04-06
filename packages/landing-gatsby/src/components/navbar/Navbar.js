import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../images/mgstudio_logo.webp';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'gatsby';
import NavLink from './NavLink';
import { GatsbyContext } from '../../context/context';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);
  z-index: 1;
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-items: space-evenly;
  align-items: center;
  position: fixed;
  .nav-center {
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
      margin-left: 2rem;
      margin-top: 0.8rem;
      @media only screen and (max-width: 1099px) {
        margin-top: 0rem;
      }
      /* @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
      max-height: 80vh;
    } */
    }
    ul,
    li {
      list-style-type: none;
    }

    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
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
      justify-items: space-evenly;
      margin-top: -5.2vh;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      justify-items: space-evenly;
      max-width: 799px;
    }
    ul {
      text-decoration: none;
    }
    li {
      margin-bottom: 2rem;
      position: relative;
    }
    /* ul li::marker {
    display: none;
} */
    a > img {
      display: inline-block;
      margin-left: 2rem;
    }
    button {
      color: '#f7f4f4';
      font-family: 'Raleway';
      background: transparent;
      border: transparent;
      font-size: 0.9rem;
      letter-spacing: 2px;
      font-weight: 300;
      padding: 10px 10px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
      margin-top: 3rem;
    }
  }
`;
export default Navbar;
