import React, { useState, useEffect, useRef } from "react";
import Seconds from "../seconds/Seconds";

function CountDown() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");
  const [countdownZero, setCountdownZero] = useState(false);
  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("January 07, 2024 10:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval.current);
        console.log("Countdown reached zero.");
        setCountdownZero(true);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((distance % (1000 * 60)) / 1000);

        console.log("Days:", days);
        console.log("Hours:", hours);
        console.log("Minutes:", min);
        console.log("Seconds:", sec);

        setTimerDays(String(days).padStart(2, "0"));
        setTimerHours(String(hours).padStart(2, "0"));
        setTimerMin(String(min).padStart(2, "0"));
        setTimerSec(String(sec).padStart(2, "0"));

        if (days === 0 && hours === 0 && min === 0 && sec === 0) {
          clearInterval(interval.current);
          setCountdownZero(true);
        }
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <>
      <div className="font-Montserrat text-center sm:space-x-16">
        {countdownZero ? (
          <p className="font-bold text-3xl text-center">The wait is over</p>
        ) : (
          <>
            <div className="md:hidden vvsm:mt-1  mt-40 sm:mt-36 sm:mr-20">
              <div className="flex flex-col items-center space-x-1 ">
                <span className="text-5xl font-extrabold sm:text-7xl vvsm:text-5xl ">
                  {timerDays}
                </span>
                <span className="text-sm sm:text-base sm:pb-10 vsm:pb-14 vvsm:pb-3">
                  DAYS
                </span>
              </div>
              <div className="flex flex-col items-center space-x-1">
                <span className="text-6xl font-extrabold sm:text-7xl vvsm:text-5xl">
                  {timerHours}
                </span>
                <span className="text-sm sm:text-base sm:pb-10 vsm:pb-14 vvsm:pb-3">
                  HOURS
                </span>
              </div>
              <div className="flex flex-col items-center space-x-1">
                <span className="text-6xl font-extrabold sm:text-7xl vvsm:text-5xl">
                  {timerMin}
                </span>
                <span className="text-sm sm:text-base">MIN</span>
              </div>
            </div>

            <div className="hidden md:flex flex-row font-Montserrat text-center space-x-3">
              <div className="flex items-center space-x-1">
                <span className="text-6xl font-extrabold sm:text-5xl">
                  {timerDays}
                </span>
                <span className="text-sm sm:text-base">DAYS</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-6xl font-extrabold sm:text-5xl">
                  {timerHours}
                </span>
                <span className="text-sm sm:text-base">HOURS</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-6xl font-extrabold sm:text-5xl">
                  {timerMin}
                </span>
                <span className="text-sm sm:text-base">MIN</span>
              </div>
            </div>

            <div className="flex items-center " style={{ marginLeft: "115%" }}>
              <span className="font-extrabold">
                <Seconds countdownZero={countdownZero} />
              </span>
              <span
                className="text-base sec"
                style={{ marginLeft: "-115px", marginTop: "-105px" }}
              >
                SEC
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CountDown;
