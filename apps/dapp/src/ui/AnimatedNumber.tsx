import React, { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  number: number;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ number }) => {
  const [displayNumber, setDisplayNumber] = useState(number);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayNumber((prevNumber) => {
        if (prevNumber < number) return prevNumber + 1;
        if (prevNumber > number) return prevNumber - 1;
        return prevNumber;
      });
    }, 20); // Adjust the interval to control the speed of the animation

    // Clear the interval when the target number is reached or the component is unmounted
    return () => clearInterval(interval);
  }, [number]);

  return <>{displayNumber}</>;
};
