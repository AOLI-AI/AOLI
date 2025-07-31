import React, { useState, useEffect } from "react";
import logo from "./assets/logo.jpg";
import "./App.css";

function App() {
  // Check if the target date is stored in localStorage
  const storedTargetDate = localStorage.getItem("targetDate");

  // If no target date exists, use the default one and store it
  const targetDate = storedTargetDate
    ? new Date(storedTargetDate)
    : new Date("2025-08-15T00:00:00Z"); // Set your target date here

  useEffect(() => {
    if (!storedTargetDate) {
      localStorage.setItem("targetDate", targetDate.toISOString());
    }
  }, [targetDate, storedTargetDate]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <main className="h-screen flex flex-col overflow-clip">
      <img
        style={{ mixBlendMode: "color-dodge" }}
        className="font-bold absolute top-[10rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl"
        width={300}
        src={logo}
      />
      <section className="flex flex-col justify-center items-center h-full relative z-10 mt-20">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col">
            <span className="countdown font-mono sm:text-8xl text-6xl">
              <span
                style={{ "--value": timeLeft.days } as React.CSSProperties}
                aria-live="polite"
                aria-label={"countdown to event"}
              >
                {timeLeft.days}
              </span>
            </span>
            days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono sm:text-8xl text-6xl">
              <span
                style={{ "--value": timeLeft.hours } as React.CSSProperties}
                aria-live="polite"
                aria-label={"countdown to event"}
              >
                {timeLeft.hours}
              </span>
            </span>
            hours
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono sm:text-8xl text-6xl">
              <span
                style={{ "--value": timeLeft.minutes } as React.CSSProperties}
                aria-live="polite"
                aria-label={"countdown to event"}
              >
                {timeLeft.minutes}
              </span>
            </span>
            min
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono sm:text-8xl text-6xl">
              <span
                style={{ "--value": timeLeft.seconds } as React.CSSProperties}
                aria-live="polite"
                aria-label={"countdown to event"}
              >
                {timeLeft.seconds}
              </span>
            </span>
            sec
          </div>
        </div>

        <div className="stats flex gap-5">
          <div className="stat place-items-center">
            <div className="stat-title">Wait List</div>
            <div className="stat-value text-xl">31K</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Funds</div>
            <div className="stat-value text-xl text-secondary">$4,200</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value text-xl">1,200</div>
            <div className="stat-desc">↘︎ 40 (14%)</div>
          </div>
        </div>

        <p className="text-center text-lg max-w-md text-base-content/70">
          Al Infrastructure Protocol on Solana, recipient of a Solana Al Grant.
          $AOLI
        </p>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 490"
        version="1.1"
        width={"100%"}
        className="absolute bottom-0"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
            <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          className="fill-neutral"
          d="M0,196L40,171.5C80,147,160,98,240,114.3C320,131,400,212,480,212.3C560,212,640,131,720,122.5C800,114,880,180,960,220.5C1040,261,1120,278,1200,253.2C1280,229,1360,163,1440,122.5C1520,82,1600,65,1680,73.5C1760,82,1840,114,1920,106.2C2000,98,2080,49,2160,73.5C2240,98,2320,196,2400,228.7C2480,261,2560,229,2640,245C2720,261,2800,327,2880,343C2960,359,3040,327,3120,285.8C3200,245,3280,196,3360,155.2C3440,114,3520,82,3600,89.8C3680,98,3760,147,3840,147C3920,147,4000,98,4080,65.3C4160,33,4240,16,4320,81.7C4400,147,4480,294,4560,318.5C4640,343,4720,245,4800,179.7C4880,114,4960,82,5040,98C5120,114,5200,180,5280,196C5360,212,5440,180,5520,179.7C5600,180,5680,212,5720,228.7L5760,245L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"
        />
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
            <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 50px)", opacity: 0.9 }}
          className="fill-neutral"
          d="M0,147L40,163.3C80,180,160,212,240,228.7C320,245,400,245,480,245C560,245,640,245,720,245C800,245,880,245,960,261.3C1040,278,1120,310,1200,334.8C1280,359,1360,376,1440,351.2C1520,327,1600,261,1680,228.7C1760,196,1840,196,1920,187.8C2000,180,2080,163,2160,130.7C2240,98,2320,49,2400,24.5C2480,0,2560,0,2640,8.2C2720,16,2800,33,2880,49C2960,65,3040,82,3120,98C3200,114,3280,131,3360,138.8C3440,147,3520,147,3600,122.5C3680,98,3760,49,3840,24.5C3920,0,4000,0,4080,24.5C4160,49,4240,98,4320,114.3C4400,131,4480,114,4560,130.7C4640,147,4720,196,4800,228.7C4880,261,4960,278,5040,261.3C5120,245,5200,196,5280,196C5360,196,5440,245,5520,285.8C5600,327,5680,359,5720,375.7L5760,392L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"
        />
      </svg>
    </main>
  );
}

export default App;
