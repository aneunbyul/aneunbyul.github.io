import styled from "styled-components";
import Link from 'next/link'
import LocalNav from './LocalNav'
import GlobalNav from './GlobalNav'
const Nav = () => {

  return (
      <NavWrapper>
        <GlobalNav/>
        <LocalNav/>
      </NavWrapper>
  );
};

const NavWrapper = styled.div`
  overflow-x: hidden;
  color: #141112c7;
  letter-spacing: -0.05em;
  background: white;
`;
const GlobalNavLinks = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  
  & p{
    color: rgb(29, 29, 31);
    text-decoration: none;
  }
`;
export default Nav;
