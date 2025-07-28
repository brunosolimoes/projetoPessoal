// src/components/Navbar.styles.ts
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #000000ff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #004257ff;
    }
  }
`;
