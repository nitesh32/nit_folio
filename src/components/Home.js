import React from "react";
import {useRef, useEffect} from 'react';
export default function Home() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;

    const handleMouseMove = (event) => {
      // console.log(event.clientX," ",event.clientY);
    };

    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };

  }, []);

  return (
    <div className="div-all home_property" id="home">
      <div id="nam"></div>
      <div id="image"  ref={ref}></div>
    </div>
  );
}
