import React from "react";

import { Parallax } from 'react-scroll-parallax';
import uid from '../utils/uid';

const NoiseImage = require('../images/noise.png');
const NoiseImage2 = require('../images/noise2.jpg');

function ConvexCurve({color}){
  return (<div className="position-relative mt-n16">
            <div className={`shape shape-bottom shape-fluid-x svg-shim ${color}`}>
              <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
            </div>
          </div>)
}
function ConcaveCurve({color}){
  return (
    <div className="position-relative">
      <div className={`shape shape-bottom shape-fluid-x svg-shim ${color}`}>
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"/></svg>
      </div>
    </div>)
}
function ConvexCurve2({color}){
  return (<div className="position-relative ">
            <div className={`shape shape-bottom shape-fluid-x svg-shim ${color}`}>
              <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
            </div>
          </div>)
}
function RightCircle(){
  const id = "rc-default";
  return (
      <div className="shape shape-blur-3 svg-shim text-hectiqblue h-100">
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g>
              <use
                fill={`url(#linear-${id})`}
                xlinkHref={`#path-${id}`}
              />
              <use
                fillOpacity="0.03"
                fill={`url(#pattern-${id})`}
                xlinkHref={`#path-${id}`}
              />
            </g>
          </g>
          <defs>
            <linearGradient id={`linear-${id}`} x1="600" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" stopOpacity="0.02"></stop>
              <stop offset="1" stopColor="currentColor" stopOpacity="0.2"></stop>
            </linearGradient>
            <circle id={`path-${id}`} cx="700" cy="100" r="330" > </circle>
            <pattern
              id={`pattern-${id}`}
              width="500"
              height="500"
              x="-500"
              y="-500"
              patternUnits="userSpaceOnUse"
            >
              <use xlinkHref={`#image-${id}`} />
            </pattern>
            <image
              id={`image-${id}`}
              width="500"
              height="500"
              xlinkHref={NoiseImage}
            />
          </defs>
        </svg>
      </div>)

}
function RightCircle2(){
  const id = "rc2";
  return (<Parallax className="position-absolute top-0 bottom-0 w-100 h-100  " y={["-40", "0"]}>
          <div className="position-relative top-0 bottom-0 left-0 right-0 svg-shim ">
            <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g>
                <use
                  fill={`url(#linear-${id})`}
                  xlinkHref={`#path-${id}`}
                />
                <use
                  fillOpacity="0.03"
                  fill={`url(#pattern-${id})`}
                  xlinkHref={`#path-${id}`}
                />
              </g>
            </g>
            <defs>
              <linearGradient id={`linear-${id}`} x1="600" y1="0" x2="0" y2="500" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.05"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.2"></stop>
              </linearGradient>
              <circle id={`path-${id}`} cx="500" cy="220" r="160" > </circle>
              <pattern
                id={`pattern-${id}`}
                width="500"
                height="500"
                x="-500"
                y="-500"
                patternUnits="userSpaceOnUse"
              >
                <use xlinkHref={`#image-${id}`} />
              </pattern>
              <image
                id={`image-${id}`}
                width="500"
                height="500"
                xlinkHref={NoiseImage2}
              />
            </defs></svg>
          </div>
        </Parallax>)
}

function Circle3(){
  return (
        <Parallax className="position-absolute top-0 bottom-0 w-100 h-100 " y={["-100", "100"]}>
          <div className="position-relative top-0 bottom-0 left-0 right-0 svg-shim ">
            <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="path-4" cx="50" cy="410" r="60" fill="url(#paint4_linear)"></circle>
            <defs><linearGradient id="paint4_linear" x1="0" y1="0" x2="600.98" y2="600.68" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor" stopOpacity="0.02"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0.1"></stop></linearGradient></defs></svg>
          </div>
        </Parallax>
    )
}

function Circle5(){
  const id = "c5";
  return (
      <Parallax className="position-absolute top-0 bottom-0 w-100 h-100 " y={["40", "-40"]}>
          <div className="position-relative top-0 bottom-0 left-0 right-0 svg-shim ">
            <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g>
                <use
                  fill={`url(#linear-${id})`}
                  xlinkHref={`#path-${id}`}
                />
                <use
                  fillOpacity="0.04"
                  fill={`url(#pattern-${id})`}
                  xlinkHref={`#path-${id}`}
                />
              </g>
            </g>
            <defs>
              <linearGradient id={`linear-${id}`} x1="200" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.2"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.02"></stop>
              </linearGradient>
              <circle id={`path-${id}`} cx="180" cy="150" r="60" > </circle>
              <pattern
                id={`pattern-${id}`}
                width="60"
                height="60"
                x="-500"
                y="-500"
                patternUnits="userSpaceOnUse"
              >
                <use xlinkHref={`#image-${id}`} />
              </pattern>
              <image
                id={`image-${id}`}
                width="258"
                height="258"
                xlinkHref={NoiseImage}
              />
            </defs></svg>
          </div>
        </Parallax>)
}
function Circle4(){
  const id = "c4";
  return (
      <Parallax className="position-absolute top-0 bottom-0 w-100 h-100 " y={["40", "-40"]}>
        <div className="position-relative top-0 bottom-0 left-0 right-0 svg-shim ">
            <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g>
                <use
                  fill={`url(#linear-${id})`}
                  xlinkHref={`#path-${id}`}
                />
                <use
                  fillOpacity="0.04"
                  fill={`url(#pattern-${id})`}
                  xlinkHref={`#path-${id}`}
                />
              </g>
            </g>
            <defs>
              <linearGradient id={`linear-${id}`} x1="600" y1="0" x2="200" y2="00" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.5"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.01"></stop>
              </linearGradient>
              <circle id={`path-${id}`} cx="250" cy="250" r="30" > </circle>
              <pattern
                id={`pattern-${id}`}
                width="60"
                height="60"
                x="-500"
                y="-500"
                patternUnits="userSpaceOnUse"
              >
                <use xlinkHref={`#image-${id}`} />
              </pattern>
              <image
                id={`image-${id}`}
                width="258"
                height="258"
                xlinkHref={NoiseImage}
              />
            </defs></svg>
          </div>

        </Parallax>)

}
function CircleLg({speed, startOpacity, endOpacity, radius, cx, cy, lg, md, sm, xs, grad}={}){
  const id = uid();

  return (
      <Parallax className={`position-absolute left-0 right-0 top-0 bottom-0 w-100 h-100 d-none ${lg? "d-lg-block": "d-lg-none"} ${md? "d-md-block": "d-md-none"} ${sm? "d-sm-block": "d-sm-none"} ${xs? "d-block": "d-none"}`} 
                y={[(-speed).toString(), speed.toString()]}>
        <div className="position-relative top-0 bottom-0 left-0 right-0 svg-shim ">
            <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g>
                <use
                  fill={`url(#linear-${id})`}
                  xlinkHref={`#path-${id}`}
                />
                <use
                  fillOpacity="0.04"
                  fill={`url(#pattern-${id})`}
                  xlinkHref={`#path-${id}`}
                />
              </g>
            </g>
            <defs>
              <linearGradient id={`linear-${id}`} {...grad} gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity={startOpacity}></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity={endOpacity}></stop>
              </linearGradient>
              <circle id={`path-${id}`} cx={cx} cy={cy} r={radius} > </circle>
              <pattern
                id={`pattern-${id}`}
                width="10"
                height="10"
                x="-10"
                y="-10"
                patternUnits="userSpaceOnUse"
              >
                <use xlinkHref={`#image-${id}`} />
              </pattern>
              <image
                id={`image-${id}`}
                width="500"
                height="500"
                xlinkHref={NoiseImage2}
              />
            </defs></svg>
          </div>

        </Parallax>)

}
export {ConvexCurve, ConvexCurve2, RightCircle, RightCircle2, Circle3, Circle4, Circle5, ConcaveCurve, CircleLg}