import styled from 'styled-components'
import Link from 'next/link'

const Footer = () => {
  const topArrowClick = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <StyledFooter>
      {/*<LimitWidthLayout padding="36px 0">*/}
      <InnerWrapper>
        <p>telePIX © 2021</p>
        <TagBox>

        </TagBox>
      </InnerWrapper>
      {/*</LimitWidthLayout>*/}
    </StyledFooter>
  )
}

const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  & > div {
    padding-right: 0;
  }
  & a {
    font-size: 2.4rem;
    color: white;
    line-height: 3rem;
    //padding-right: 4rem;
  }
  & img {
    height: 2rem;
    padding-right: 4rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    & a {
      font-size: 1.4rem;
      color: white;
      line-height: 1.6rem;
    }
    gap: 20px;
    flex-direction: row;
    & div {
      display: flex;
      gap: 10px;
      align-items: center;
      padding-right: 50px;
    }
  }
`

const InnerWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  text-transform: uppercase;
  color: #979797;

    padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  & > p {
    font-size: 2.6rem;
    color: grey;
    line-height: 3rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    & > p {
      font-size: 1.4rem;
      color: grey;
      line-height: 1.6rem;
      padding-right: 30px;
    }
    flex-direction: row;
  }
`

const TopArrow = styled.div`
  cursor: pointer;
  width: 50px;
  height: auto;
  right: 0;
  position: absolute;
  top: -110%;
  z-index: 10;
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    top: 50%;
    transform: translateY(-50%);
  }
`

const StyledFooter = styled.footer`
  background-color: #1b1b1b;
`
export default Footer
