import styled, {css, keyframes} from "styled-components";
import {useState, useCallback, useEffect, useRef} from "react";

const ImageSequenceTop = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const obj1Ref = useRef(null);
  const obj2Ref = useRef(null);
  const obj3Ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  // const {setIsShowHeaderBg} = useContext(HeaderBgContext);
  // const isActive = useIntersectionObserver(containerRef, 0, true);
  const [imgArr, setImgArr] = useState([]);
  const [finishedLoadingImages, setFinishedLoadingImages] = useState(false);
  const [enterNewScene, setEnterNewScene] = useState(false);

  const [prevScrollHeight, setPrevScrollHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  // const [delayedYOffset, setDelayedYOffset] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);
  const heightNum = 5;
  const acc = 0.2;
  let rafState;
  let rafId;
  let delayedYOffset = 0;

  const scrollLoop = () => {
    if (!scrollHeight) return;
    setEnterNewScene(false);
    setPrevScrollHeight(0);
    for (let i = 0; i < currentScene; i++) {
      setPrevScrollHeight((p) => p + scrollHeight);
    }
    if (enterNewScene) return;
    playAnimation();
  };

  function loop() {
    delayedYOffset =
        delayedYOffset + (window.pageYOffset - delayedYOffset) * acc;
    let sequence = 0;
    if (!enterNewScene) {
      if (currentScene === 0) {
        const currentYOffset = delayedYOffset - prevScrollHeight;
        sequence = Math.round(calcValues([0, 299], currentYOffset));
        // console.log(delayedYOffset, sequence);

        console.log(window.pageYOffset, scrollHeight)
        if (window.pageYOffset <= scrollHeight) {
          if (imgArr[sequence] && canvasRef && canvasRef.current) {
            canvasRef.current
                .getContext("2d")
                ?.drawImage(imgArr[sequence], 0, 0, 1920, 1114 * (1920 / 1740));
          }
        }
      }
    }
    if (delayedYOffset < 1) {
      scrollLoop();
      if (canvasRef && canvasRef.current) {
        canvasRef.current.style.opacity = 1;
      }
      if (imgArr[0] && canvasRef) {
        canvasRef.current
            ?.getContext("2d")
            ?.drawImage(imgArr[0], 0, 0, 1920, 1114 * (1920 / 1740));
      }
    }
    if (document.body.offsetHeight - window.innerHeight - delayedYOffset < 1) {
      let tempYOffset = window.pageYOffset;
      scrollTo(0, tempYOffset - 1);
    }
    rafId = requestAnimationFrame(loop);
    if (Math.abs(window.pageYOffset - delayedYOffset) < 1) {
      cancelAnimationFrame(rafId);
      rafState = false;
    }
  }

  function playAnimation() {
    if (!canvasRef || !canvasRef.current) return;

    // const objs = sceneInfo[currentScene].objs;
    // const values = sceneInfo[currentScene].values;
    const currentYOffset = window.pageYOffset - prevScrollHeight;
    // const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;
    const canvas_opacity = [1, 0, {start: 0.9, end: 1}];
    const messageA_opacity_in = [0, 1, {start: 0.1, end: 0.2}];
    const messageA_font_size_in = [100, 0, {start: 0.1, end: 0.2}];
    const messageB_opacity_in = [0, 1, {start: 0.3, end: 0.4}];
    const messageC_opacity_in = [0, 1, {start: 0.5, end: 0.6}];
    const messageA_translateY_in = [-30, -50, {start: 0.1, end: 0.2}];
    const messageB_translateY_in = [-30, -50, {start: 0.3, end: 0.4}];
    const messageC_translateY_in = [-30, -50, {start: 0.5, end: 0.6}];
    const messageA_opacity_out = [1, 0, {start: 0.25, end: 0.3}];
    const messageB_opacity_out = [1, 0, {start: 0.45, end: 0.5}];
    const messageC_opacity_out = [1, 0, {start: 0.65, end: 0.7}];
    const messageA_font_size_out = [0, 400, {start: 0.25, end: 0.3}];
    const messageA_translateY_out = [-50, -30, {start: 0.25, end: 0.3}];
    const messageB_translateY_out = [-50, -30, {start: 0.45, end: 0.5}];
    const messageC_translateY_out = [-50, -30, {start: 0.65, end: 0.7}];

    switch (currentScene) {
      case 0:
        canvasRef.current.style.opacity = calcValues(
            canvas_opacity,
            currentYOffset
        );
        if (scrollRatio <= 0.22) {
          // in
          obj1Ref.current.style.opacity = calcValues(
              messageA_opacity_in,
              currentYOffset
          );
          obj1Ref.current.style.transform = `perspective(100px) translate3d(-50%, ${calcValues(
              messageA_translateY_in,
              currentYOffset
          )}%, ${calcValues(messageA_font_size_in, currentYOffset)}px)`;
          // obj1Ref.current.style.fontSize = `${calcValues(
          //   messageA_font_size_in,
          //   currentYOffset
          // )}rem`;
        } else {
          // out
          obj1Ref.current.style.opacity = calcValues(
              messageA_opacity_out,
              currentYOffset
          );
          // obj1Ref.current.style.fontSize = `${calcValues(
          //   messageA_font_size_out,
          //   currentYOffset
          // )}rem`;
          obj1Ref.current.style.transform = `perspective(100px) translate3d(-50%, ${calcValues(
              messageA_translateY_out,
              currentYOffset
          )}%, ${calcValues(messageA_font_size_in, currentYOffset)}px)`;
        }
        if (scrollRatio <= 0.42) {
          // in
          obj2Ref.current.style.opacity = calcValues(
              messageB_opacity_in,
              currentYOffset
          );
          obj2Ref.current.style.transform = `perspective(100px) translate3d(-50%, ${calcValues(
              messageB_translateY_in,
              currentYOffset
          )}%, 0)`;
        } else {
          // out
          obj2Ref.current.style.opacity = calcValues(
              messageB_opacity_out,
              currentYOffset
          );
          obj2Ref.current.style.transform = `perspective(100px) translate3d(-50%, ${calcValues(
              messageB_translateY_out,
              currentYOffset
          )}%, 0)`;
        }
        if (scrollRatio <= 0.62) {
          // in
          obj3Ref.current.style.opacity = calcValues(
              messageC_opacity_in,
              currentYOffset
          );
          obj3Ref.current.style.transform = `perspective(100px) translate3d(-50%, ${calcValues(
              messageC_translateY_in,
              currentYOffset
          )}%, 0)`;
        } else {
          // out
          obj3Ref.current.style.opacity = calcValues(
              messageC_opacity_out,
              currentYOffset
          );
          obj3Ref.current.style.transform = `perspective(100px) translate3d(-50%, ${calcValues(
              messageC_translateY_out,
              currentYOffset
          )}%, 0)`;
        }

        break;
    }
  }

  const calcValues = (values, currentYOffset) => {
    let rv;
    // 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
    const scrollRatio = currentYOffset / scrollHeight;

    if (values.length === 3) {
      // start ~ end 사이에 애니메이션 실행
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (
          currentYOffset >= partScrollStart &&
          currentYOffset <= partScrollEnd
      ) {
        rv =
            ((currentYOffset - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
            values[0];
      } else if (currentYOffset < partScrollStart) {
        rv = values[0];
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }
    return rv;
  };

  // Scene 0 이미지 로드
  function loadImagesOfScene0() {
    let totalImages = 0;
    if (finishedLoadingImages) return;
    let scene0Images = [];
    let numberOfLoadedImages = 0;
    for (let i = 0; i < 299; i++) {
      let imgElem = new Image();
      imgElem.src = `./Image-Sequence/SatteliteMoveLoop_Horizontal_v2${i
          .toString()
          .padStart(3, "0")}.png`;
      scene0Images.push(imgElem);
      const loadImag = () => {
        scene0Images.push(imgElem);
        numberOfLoadedImages++;
        totalImages++;

        if (numberOfLoadedImages === 298) {
          // 해당 씬의 이미지가 모두 로드되었으면
          setFinishedLoadingImages(true);
          // console.log(`scene 0 이미지 로드 완료`);
          // console.log(`로드된 이미지 총개수: ${totalImages + 1}`);
          if (!canvasRef || !canvasRef.current) return;
          const context = canvasRef.current.getContext("2d");
          context.drawImage(scene0Images[0], 0, 0, 1920, 1114 * (1920 / 1740));
        }
      };
      imgElem.addEventListener("load", loadImag);
    }
    setImgArr(scene0Images);
  }

  const setLayout = () => {
    // 각 스크롤 섹션의 높이 세팅
    setScrollHeight((heightNum - 1) * window.innerHeight);
    containerRef.current.style.height = `${heightNum * window.innerHeight}px`;
  };

  useEffect(() => {
    if (!canvasRef || !canvasRef.current) return;
    if (imgArr.length !== 0) return;
    loadImagesOfScene0();
    setLayout();
  }, [imgArr]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    // window.pageYOffset = window.pageYOffset;
    scrollLoop();
    if (!rafState) {
      rafId = requestAnimationFrame(loop);
      rafState = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollHeight, delayedYOffset, rafState, rafId, scrollHeight]);

  // useEffect(() => {
  //   setIsShowHeaderBg((p) => !p);
  // }, [isActive]);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  const checkMobile = useCallback(() => {
    window.innerWidth >= 578 ? setIsMobile(false) : setIsMobile(true);
  }, [isMobile]);

  return (
      <Wrapper ref={containerRef} scrollHeight={scrollHeight}>
        <Box>
          <canvas
              ref={canvasRef}
              width={1920}
              height={(1920 * 1024) / 1600}
         />
          <MainTitle>
            <ProgressLineText>
              <p>_____</p> <p>_</p> <p>_</p>
            </ProgressLineText>
            <br/>
          </MainTitle>
          <MainTitle isScrolled ref={obj1Ref}>
            <ProgressLineText>
              <p>_____</p> <p>_</p> <p>_</p>
            </ProgressLineText>
            <br/>
            <div>
              <span>extracting insights </span>
              <span>from space</span>
            </div>
          </MainTitle>
          <MainTitle isScrolled ref={obj2Ref}>
            <ProgressLineText>
              <p>_____</p> <p>_</p> <p>_</p>
            </ProgressLineText>
            <br/>
            <div>
              <span>TelePiX provides outstanding solutions</span>
              <span>only for what you want to see</span>
            </div>
          </MainTitle>
          <MainTitle isScrolled ref={obj3Ref}>
            <ProgressLineText>
              <p>_____</p> <p>_</p> <p>_</p>
            </ProgressLineText>
            <br/>
            <div>
              <span>PROTECT YOUR PROPERTY</span>
              <span>AND ASSET FROM ANTICIPATE THREATS</span>
            </div>
          </MainTitle>
        </Box>
      </Wrapper>
  );
};

const scaleUp = keyframes`
  from {
    transform: scaleX(0)
  }
  to {
    transform: scaleX(1)
  }
`;

const ProgressLineText = styled.span`
  & > * {
    display: inline-block;
    transform: scaleX(0);
    transform-origin: left;
  }

  & > :first-child {
    animation: ${scaleUp} 500ms 200ms forwards;
  }

  & > :nth-child(2) {
    animation: ${scaleUp} 500ms 400ms forwards;
  }

  & > :last-child {
    animation: ${scaleUp} 500ms 500ms forwards;
  }
`;

const MainTitle = styled.div`
  & > div {
    display: flex;
    flex-direction: column;
  }

  font-size: 4rem;
  white-space: nowrap;
  text-transform: uppercase;
  font-family: "Montserrat-Medium";
  color: white;
  perspective-origin: center;
  transform-origin: left;
  ${({isScrolled}) =>
          isScrolled
                  ? css`
                    display: none;
                    opacity: 0;
                  `
                  : css`
                    display: block;
                    position: absolute;
                    left: 50%;
                    transform: perspective(100px) translate(-50%, -50%);
                    top: 50%;
                    opacity: 1;
                  `}
`;


const Box = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;

  & canvas {
    //display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;

  }
`;

const Wrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: #141112c7;
  letter-spacing: -0.05em;
  background: white;

  & img {
    width: 100%;
  }

  height: unset;

`;

export default ImageSequenceTop;
