import styled, { css } from "styled-components";
import Nav from "./Nav";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Header = ({ visible, setVisible }) => {

  return (
    <HeaderWrapper>
      asdjksdlfj
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  ${({ headerColor }) =>
    headerColor
      ? css`
          background-color: #ff464600;
        `
      : css`
          background-color: #080808;
        `};

  padding: 0 20px;
  transition: all 150ms linear;
  position: fixed;
  width: 100vw;
  height: var(--header_mobile_height);
  /* background-color: rgba(255, 255, 255, 0.3); */
  /* backdrop-filter: blur(10px); */
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ visible }) =>
    visible
      ? css`
          transform: translateY(0);
        `
      : css`
          transform: translateY(calc(-1 * var(--header_height)));
        `}
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 48px;
    background-color: #ff464600;
    height: var(--header_height);
  }
`;

export default Header;
