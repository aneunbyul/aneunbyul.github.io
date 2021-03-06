import styled from "styled-components";
import Link from 'next/link'

const GlobalNav = () => {

  return (
      <GlobalNavWrapper>
        <GlobalNavLinks>
          <Link href={'/#'}>
          <p>
            Work 1
          </p>
          </Link>
          <Link href={'/#'}>
          <p>
            Work 2
          </p>
          </Link>
          <Link href={'/#'}>
          <p>
            Work 3
          </p>
          </Link>
          <Link href={'/#'}>
          <p>
            Work 4
          </p>
          </Link>
        </GlobalNavLinks>
      </GlobalNavWrapper>
  );
};

const GlobalNavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 44px;
  padding: 0 1rem;
  overflow-x: hidden;
  color: #141112c7;
  letter-spacing: -0.05em;
  //background: white;
`;
const GlobalNavLinks = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  
  & Link{
    color: rgb(29, 29, 31);
    text-decoration: none;
  }
`;
export default GlobalNav;
