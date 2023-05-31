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
  const eyeLeft = useRef<SVGGElement>(null);
  const eyeRight = useRef<SVGGElement>(null);

  function calculateAngle(element: RefObject<SVGGElement>) {
    if (!element.current) return;
    /* let elementX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elementY = element.current.offsetTop + element.current.clientHeight / 2; */

    let elementX =
      element.current.getBoundingClientRect().left +
      element.current.getBoundingClientRect().width / 2;
    let elementY =
      element.current.getBoundingClientRect().top +
      element.current.getBoundingClientRect().width / 2;

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
      {/* <div className="flex items-center p-3 space-x-3">
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
      </div> */}

      <div className="w-[100px]">
        <svg
          viewBox="88.144 116.627 118.95 91.421" /*onMouseMove={handleMouseMove} */
        >
          <path
            d="M9.93 67.23s3.52-5.7 9.01-11.76c2.01-2.21 5.07-5.49 5.21-6.76c.14-1.27-2.11-8.09-3.24-13.73c-.94-4.71-1.41-10.7.28-12.53s11.23.04 16.89 2.82c5.8 2.84 8.77 5.34 9.57 5.35c1 .01 6.9-4.65 16.05-4.5s15.63 4.36 16.89 4.36s5.34-3.04 10.98-5.98c6.62-3.45 14.36-3.73 15.91-2.6c1.55 1.13.56 9.29-.56 13.51c-1.44 5.39-3.87 11.47-3.73 12.6c.14 1.13 2.6 2.32 7.53 7.81c3.89 4.34 8.66 12.81 8.66 12.81L66.67 79.48L9.93 67.23z"
            fill="#b0b0b0"
            transform="matrix(1, 0, 0, 1, 84.124054, 95.322189)"
          ></path>
          <path
            d="M5.71 75.12c0 .84 8.73 5.63 8.73 5.63s-10.42 3.8-10.42 4.5c0 1.13 15.91 16.75 31.53 22.1c13.02 4.46 40.22 9.99 61.94-1.2c18.86-9.71 25.06-17.25 25.06-18.37s-8.45-5.63-8.45-5.63s8.87-6.05 8.87-6.9c0-.84-3.52-7.04-4.65-8.87s-4.5-7.18-5.91-7.74c-1.41-.56-27.73-11.54-36.46-5.49c-4.56 3.16-5.21 6.76-5.21 10.28c0 6.2.56 11.54.56 11.54s-2.11-2.32-5.77-2.39c-3.45-.07-5.42 1.9-5.42 1.9s1.06-8.66.92-11.9s-.84-7.32-6.48-10.42c-8.07-4.44-28.19 3.62-34.35 7.11c-4.22 2.39-8.87 5.56-10.42 7.95s-4.07 6.91-4.07 7.9z"
            fill="#dedede"
            transform="matrix(1, 0, 0, 1, 84.124054, 95.322189)"
          ></path>
          <path
            d="M30.63 44.33c.32 0 2.8-2.54 5.44-4.69c2.78-2.27 5.91-4.55 5.91-4.79c0-.47-11.64-9.01-14.92-6.48s2.82 15.96 3.57 15.96z"
            fill="#5d6268"
            transform="matrix(1, 0, 0, 1, 84.124054, 95.322189)"
          ></path>
          <path
            d="M86.66 34.66c-.03.33 3.2 2.21 5.73 4.5c2.53 2.3 5.02 4.65 5.35 4.6c.66-.09 6.29-12.86 3.66-15.11s-14.65 5.08-14.74 6.01z"
            fill="#5d6268"
            transform="matrix(1, 0, 0, 1, 84.124054, 95.322189)"
          ></path>
          <path
            d="M43.02 102.52c1.82-.71 1.5-7.6 4.6-14.27c3.1-6.66 6.66-9.95 8.73-11.36c2.06-1.41 3.66-1.88 4.79-3.38s1.01-8.48-.09-10.93c-1.5-3.33-5.63-7.93-13.8-7.37c-8.17.56-14.92 9.1-18.68 12.67c-3.75 3.57-9.48 7.41-9.39 14.73c.09 7.32 6.19 12.39 9.95 15.11c3.75 2.74 11.26 5.83 13.89 4.8z"
            fill="#464c4f"
            transform="matrix(1, 0, 0, 1, 84.124054, 95.322189)"
          ></path>
          <path
            d="M71.17 75.02c-1.69-1.13-1.03-6.19-.94-8.54c.09-2.35 1.03-8.35 7.41-10.04s9.76.84 13.61 3.47c3.85 2.63 7.79 6.15 10.51 8.07c6.1 4.32 11.26 9.76 9.95 15.58c-1.31 5.82-5.11 9.45-10.98 13.61c-6.1 4.32-11.73 7.88-13.7 6.66s-1.31-11.26-5.73-18.21c-4.4-6.94-8.15-9.28-10.13-10.6z"
            fill="#464c4f"
            transform="matrix(1, 0, 0, 1, 84.124054, 95.322189)"
          ></path>
          <path
            d="M64.84 82.15c-5.68.15-8.29 3.83-8.35 7.04c-.09 4.55 1.97 5.44 2.91 6.01c1.17.7 2.87 1.24 2.06 2.77c-.84 1.6-1.64 2.25-5.11 1.97c-2.15-.17-3.01-2.28-5.16-1.64c-2.86.84-.28 5.57 6.1 5.82c5.96.23 7.88-2.82 7.88-2.82s2.21 3.05 7.6 2.72c5.53-.34 8.4-5.21 5.21-6.15c-2.29-.67-1.92 2.16-5.11 2.3c-2.3.1-3.51-.58-4.36-1.69c-.47-.61-.42-2.06.23-2.53c.66-.47 3.83-1.69 3.94-6.1c.09-3.71-2.68-7.84-7.84-7.7z"
            fill="#2f2f2f"
            transform="matrix(1, 0, 0, 1, 84.124054, 95.322189)"
          ></path>

          <g
            id="eyeLeft"
            ref={eyeLeft}
            style={{
              transformOrigin: "center",
              transformBox: "fill-box",
              //transform: `rotate(${calculateAngle(eyeLeft)})`,
            }}
          >
            <ellipse
              style={{
                paintOrder: "fill",
                fill: "rgb(176, 176, 176)",
              }}
              cx="50.911"
              cy="67.149"
              rx="6.845"
              ry="6.845"
              transform="matrix(1, 0, 0, 1, 84.124054, 95.322189)"
            ></ellipse>
            <ellipse
              style={{
                paintOrder: "fill",
                fill: "black",
              }}
              cx="50.443"
              cy="70.434"
              rx="3.502"
              ry="3.502"
              transform="matrix(1, 0, 0, 1, 84.124054, 95.322189)"
            ></ellipse>
          </g>

          <g
            id="eyeRight"
            style={{ transformOrigin: "center", transformBox: "fill-box" }}
            transform="rotate(120)"
          >
            <ellipse
              style={{
                paintOrder: "fill",

                fill: "rgb(176, 176, 176)",
              }}
              cx="81.005"
              cy="67.373"
              rx="6.845"
              ry="6.845"
              transform="matrix(1, 0, 0, 1, 84.124054, 95.322189)"
            ></ellipse>
            <ellipse
              style={{
                paintOrder: "fill",
                fill: "black",
              }}
              cx="80.929"
              cy="70.71"
              rx="3.502"
              ry="3.502"
              transform="matrix(1, 0, 0, 1, 84.124054, 95.322189)"
            ></ellipse>
          </g>
        </svg>
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
