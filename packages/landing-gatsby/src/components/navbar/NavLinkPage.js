import React, { useContext } from 'react';

import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyContext } from '../../context/context';

const NavLink = ({ page }) => {
  const { links } = useContext(GatsbyContext);
  return (
    <Wrapper>
      <button>{page}</button>

      <div className="links">
        {links.map((link, index) => {
          const { url, label, icon } = link;
          if (link.page === page) {
            return (
              <Link to={url} key={index}>
                {icon}
                {label}
              </Link>
            );
          }
        })}
        <div className="caret"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  position: relative;
  button {
    color: #f7f4f4;
    background: transparent;
    border: transparent;
    font-size: 1.3rem;
    letter-spacing: 2px;
    font-weight: 400;
    padding: 10px;
    width: 100%;
    text-transform: capitalize;
    position: relative;
    font-family: 'Merriweather';
  }
  .links {
    position: absolute;
    /* margin-top: 2.4rem; */
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;
    padding: 4rem;
    background: var(--clr-white);
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 2rem;
    grid-gap: 1rem 4rem;
    // link names on the navbar >> Koti, meista jne.
    a {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.5rem;
      grid-gap: 0.5rem;
      align-items: center;
      color: #19243a;
      text-transform: capitalize;
      font-family: 'Merriweather';
      font-weight: 500;
      font-size: 1rem;
      .icon {
        font-size: 1.2rem;
        color: #d80f06;
      }
      &:hover {
        color: #88add2;
        .icon {
          color: #b084ce;
        }
      }
    }
  }
  &:hover .links {
    visibility: visible;
  }
  .caret {
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-white);
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default NavLink;
