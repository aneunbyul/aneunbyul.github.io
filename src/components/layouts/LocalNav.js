import styled from "styled-components";
import Link from 'next/link'
import { useState, useEffect } from 'react';

const LocalNav = () => {


  const [isSticky, setIsSticky]= useState(false)

  const checkMenu=()=> {
    const yOffset = window.pageYOffset;

    if (yOffset > 44) {
      setIsSticky(true)
      document.body.classList.add('local-nav-sticky');
    } else {
      setIsSticky(false)
      document.body.classList.remove('local-nav-sticky');
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkMenu);
    return () => window.removeEventListener("scroll", checkMenu);
  }, );

  return (
      <LocalNavWrapper isSticky={isSticky}>
        <LocalNavLinks>
          <Link href={'/#'}>
          <ProductName>
            Home
          </ProductName>
          </Link>
          <Link href={'/#'}>
            <NavName>
              About
            </NavName>
          </Link>
          <Link href={'/#'}>
          <NavName>
            Work
          </NavName>
          </Link>
          <Link href={'/#'}>
          <NavName>
            Contact
          </NavName>
          </Link>
        </LocalNavLinks>
      </LocalNavWrapper>
  );
};

const LocalNavWrapper = styled.div`
  left: 0;
  z-index: 11;
  width: 100%;
  height: 52px;
  padding: 0 1rem;
  border-bottom: 1px solid #ddd;

  position: ${props => props.isSticky ? 'fixed' : 'absolute'};
  top: ${props => props.isSticky ? '0' : '45px'};
  background: ${props => props.isSticky ? 'rgba(255, 255, 255, 0.1)' : 'none'};
  -webkit-backdrop-filter: ${props => props.isSticky ? 'saturate(180%) blur(15px)' : 'none'};
  -moz-backdrop-filter: ${props => props.isSticky ? 'saturate(180%) blur(15px)' : 'none'};
  -o-backdrop-filter: ${props => props.isSticky ? 'saturate(180%) blur(15px)' : 'none'};
  backdrop-filter: ${props => props.isSticky ? 'saturate(180%) blur(15px)' : 'none'};
  
`;
const LocalNavLinks = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  
  & p{
    font-size: 1rem;
    margin-left: 2rem;
  }
`;
const ProductName = styled.div`
  margin-right: auto;
  font-size: 2.4rem;
  font-weight: bold;
`;
const NavName = styled.div`
  font-size: 1.3rem;
  margin-left: 2rem;
  //font-weight: bold;
`;

export default LocalNav;
