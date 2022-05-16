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
`;
export default Nav;
