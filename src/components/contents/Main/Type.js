import styled from "styled-components";
import TypeIt from 'typeit-react'
import { useState } from 'react'

const Type = () => {
  const SuperStrong = ({ children }) => {
    return <strong style={{ fontSize: "80px" }}>{children}</strong>;
  };

  return (
      <TypeContainer>
        <TypeIt>
          Weak text . <SuperStrong>Super strong text.</SuperStrong>
        </TypeIt>
        <TypeIt
            options={{
              strings: ["This wi ll be    type d!"],
              speed: 10,
              waitUntilVisible: true,
            }}
        />
        <TypeIt element={"h3"}>This will be typed in an H3 tag.</TypeIt>applekeyboard
        <TypeIt
            getBeforeInit={(instance) => {
              // instance.type("Hi!").pause(750).type(" I'm EunByul").delete(7).pause(500).type("------");
              instance.type("Hi!").pause(750).type(" I'm EunByul").pause(500)

              return instance;
            }}
        />
        <TypeIt
            options={{
              strings: ["This will be typed!"],
              speed: 100,
              waitUntilVisible: true,
              loop:true
            }}

            getBeforeInit={(instance) => {
              // instance.type("Hi!").pause(750).type(" I'm EunByul").delete(7).pause(500).type("------");
              instance.type("please scroll down");

              // Remember to return it!
              return instance;
            }}
        />
      </TypeContainer>
  );
};

const TypeContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default Type;
