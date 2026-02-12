//== React Libs
import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

/*
Component Description:
    AnimatedText :- The component responsible for the Animated Titles on the webpage
*/

const AnimatedText = ({title}) => {
  const textRef = useRef(null);

  useEffect(() => {
    animate(textRef.current, {
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1500,
      ease: 'out(2)'  // v4 uses different easing functions
    });
  }, []);

  return (
    <div className="animated-text" ref={textRef} style={{ opacity: 0 }}>
        {title}
    </div>
  )
};

export default AnimatedText;
