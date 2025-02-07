import {useEffect, useState} from 'react';
import './Countdown.css'; // Add optional styling here

const Countdown = ({targetDate}) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  // Helper function to calculate the remaining time
  function getTimeRemaining(endDate) {
    const total = Date.parse(endDate) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {total, days, hours, minutes, seconds};
  }

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = getTimeRemaining(targetDate);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on unmount
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return <div className="countdown">Event has started!</div>;
  }

  return (
    <div className="Myinfo">
      <p>{`${timeLeft.days} Days ${timeLeft.hours} Hours ${timeLeft.minutes} Minutes ${timeLeft.seconds} Seconds`}</p>
    </div>
  );
};

export default Countdown;
