"use client";
import { useState, useEffect } from "react";
import "./timer.css";
import { motion } from "framer-motion";

const Timer = () => {
  const duration = 23760000;
  const [timer, setTimer] = useState<number>(0);

  const msToTime = (duration: number) => {
    let seconds = Math.floor((duration / 1000) % 60).toString();
    let minutes = Math.floor((duration / (1000 * 60)) % 60).toString();
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24).toString();

    return `${hours.padStart(2, "0")}:${minutes.padStart(
      2,
      "0"
    )}:${seconds.padStart(2, "0")}`;
  };

  useEffect(() => {
    const savedEndTime = localStorage.getItem("endTime");
    let endTime = savedEndTime ? parseInt(savedEndTime) : Date.now() + duration;

    if (Date.now() >= endTime) {
      endTime = Date.now() + duration;
    }

    const updateTimer = () => {
      const currentTime = Date.now();
      const remainingTime = endTime - currentTime;

      if (remainingTime <= 0) {
        endTime = currentTime + duration;
      }

      setTimer(remainingTime);
      localStorage.setItem("endTime", endTime.toString());
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <motion.div
      className="backdrop-btn font-montserrat font-black text-4xl md:text-5xl lg:text-6xl p-1 leading-8 tracking-wide text-[#36045B]"
      initial={{
        y: 20,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
        },
      }}
      viewport={{ once: true }}
    >
      {msToTime(timer)}
    </motion.div>
  );
};

export default Timer;
