import styled from "styled-components";
const Nav = () => {

  return (
      <NavWrapper>
        <GlobalNavLinks>
          <p>
            DEFENSE & INTELLIGENCE
          </p>
          <p>
            DEFENSE & INTELLIGENCE
          </p>
          <p>
            DEFENSE & INTELLIGENCE
          </p>
          <p>
            DEFENSE & INTELLIGENCE
          </p>

        </GlobalNavLinks>
        {/*  title="SOLUTIONS"*/}
        {/*  baseUrl="/solutions"*/}
        {/*  list={solutionList}*/}
        {/*  hasQuery*/}
        {/*  closeShowMobile={() => setIsShowMobile(false)}*/}
        {/*  setCurrentMobileTab={setCurrentMobileTab}*/}
        {/*  currentMobileTab={currentMobileTab}*/}
        {/*/>*/}
        {/*<HeaderNavLink*/}
        {/*  title="PRODUCTS"*/}
        {/*  baseUrl="/products"*/}
        {/*  list={productList}*/}
        {/*  hasQuery*/}
        {/*  closeShowMobile={() => setIsShowMobile(false)}*/}
        {/*  setCurrentMobileTab={setCurrentMobileTab}*/}
        {/*  currentMobileTab={currentMobileTab}*/}
        {/*/>*/}
      </NavWrapper>
  );
};

const NavWrapper = styled.div`
  /*스크롤값 차지 안하도록 absolute지정*/
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
