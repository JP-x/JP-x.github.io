import React from 'react';
import  { useSpring, animated } from 'react-spring';
import logoNum from "../img/Logo_Num.png"
  export default function Svganimator() {
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const transform1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
    const transform2 = (x, y) => `translate3d(${x / 6.5}px,${y / 3.5}px,0)`
    const animationProps = useSpring({
      config: {
        mass: 50,
        friction:2000,
        tension: 400,
        duration: 10000
      },
      from: {
        d: "M13.6,-22.9C20,-19.9,29.1,-21,32.7,-17.9C36.3,-14.7,34.3,-7.4,34.7,0.2C35,7.8,37.8,15.6,36.5,22.7C35.3,29.9,30,36.3,23.2,39.1C16.5,41.8,8.2,40.9,2.1,37.2C-3.9,33.5,-7.9,27,-9.8,21.4C-11.7,15.8,-11.5,11.2,-14.8,7.8C-18.2,4.4,-25,2.2,-29.2,-2.4C-33.3,-7,-34.8,-14,-33,-20C-31.2,-26.1,-26.1,-31.2,-20,-34.4C-14,-37.7,-7,-39.1,-1.7,-36.2C3.6,-33.2,7.2,-26,13.6,-22.9Z",
      },
      to: {
      d: "M16.7,-26C23.7,-24.8,33.1,-24.6,36.6,-20.5C40.2,-16.3,38,-8.2,38.1,0C38.1,8.2,40.5,16.5,36.2,19.4C31.9,22.3,21,19.9,13.9,22.3C6.7,24.6,3.4,31.7,-0.8,33.1C-4.9,34.4,-9.9,30,-15.9,27C-21.9,24,-29.1,22.5,-30,18.2C-30.9,13.9,-25.6,7,-22.9,1.5C-20.3,-3.9,-20.3,-7.8,-20.2,-13.5C-20.1,-19.3,-20,-26.8,-16.6,-30.1C-13.2,-33.3,-6.6,-32.3,-0.9,-30.8C4.8,-29.2,9.6,-27.1,16.7,-26Z",
      },
    loop: {reverse: true}
    });
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))


    return (
        <>
        <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          <animated.div className='absologo'  style={{ transform: props.xy.to(transform1) }} />          
      
          <div className="absologo-svg">
            <animated.div style={{ transform: props.xy.to(transform2) }}>
            <svg viewBox="-50 -50 100 100" id="sw-js-blob-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs> 
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor="rgba(204, 55, 255, 1)" offset="0%"></stop>
                    <stop id="stop2" stopColor="rgba(41.84, 251.39, 255, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <animated.path stroke="url(#sw-gradient)"  strokeWidth="2"  fill="none" height="100%" width="100%" d={animationProps.d}/>
            </svg>
            </animated.div>
          </div>
         </div>
        </>
    );
  }

