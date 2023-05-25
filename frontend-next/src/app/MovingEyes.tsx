"use client";

import { useState, useRef, useEffect, RefObject } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export default function MovingEyes() {
  const [mouseCoordinates, setMouseCoordinates] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const eyeLeft = useRef<HTMLDivElement>(null);
  const eyeRight = useRef<HTMLDivElement>(null);

  function calculateAngle(element: RefObject<HTMLDivElement>) {
    if (!element.current) return;

    let elementX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elementY = element.current.offsetTop + element.current.clientHeight / 2;

    let radiant = Math.atan2(
      mouseCoordinates.x - elementX,
      mouseCoordinates.y - elementY
    );
    let rotation = radiant * (180 / Math.PI) * -1 + -18;

    return rotation;
  }

  const handleMouseMove = (event: MouseEvent) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="flex items-center p-3 space-x-3">
        <div className="flex h-12 w-12 bg-slate-400 rounded-full justify-center">
          <div
            ref={eyeLeft}
            style={{ transform: `rotate(${calculateAngle(eyeLeft)}deg)` }}
            className="flex items-end p-1"
          >
            <div className="h-5 w-5 bg-slate-600 rounded-full"></div>
          </div>
        </div>

        <div className="flex h-12 w-12 bg-slate-400 rounded-full justify-center">
          <div
            ref={eyeRight}
            style={{ transform: `rotate(${calculateAngle(eyeRight)}deg)` }}
            className="flex items-end p-1"
          >
            <div className="h-5 w-5 bg-slate-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* <svg
        viewBox="0 0 34 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="nav__eyes"
      >
        <g
          id="eyeLeft"
          data-svg-origin="8 8"
          transform="matrix(-0.02319,0.99973,-0.99973,-0.02319,16.18336,0.18768)"
          style={{ transformOrigin: "0px 0px" }}
        >
          <path
            d="M8 15.25C12.0041 15.25 15.25 12.0041 15.25 8C15.25 3.99594 12.0041 0.75 8 0.75C3.99594 0.75 0.75 3.99594 0.75 8C0.75 12.0041 3.99594 15.25 8 15.25Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M8 9C10.2091 9 12 7.20914 12 5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5C4 7.20914 5.79086 9 8 9Z"
            fill="currentColor"
          ></path>
        </g>
        <g
          id="eyeRight"
          data-svg-origin="26 8"
          transform="matrix(-0.02319,0.99973,-0.99973,-0.02319,34.60078,-17.80746)"
          style={{ transformOrigin: "0px 0px" }}
        >
          <path
            d="M26 15.25C30.0041 15.25 33.25 12.0041 33.25 8C33.25 3.99594 30.0041 0.75 26 0.75C21.9959 0.75 18.75 3.99594 18.75 8C18.75 12.0041 21.9959 15.25 26 15.25Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M26 9C28.2091 9 30 7.20914 30 5C30 2.79086 28.2091 1 26 1C23.7909 1 22 2.79086 22 5C22 7.20914 23.7909 9 26 9Z"
            fill="currentColor"
          ></path>
        </g>
      </svg> */}
    </>
  );
}
