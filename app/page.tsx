"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Hero from "@/app/components/Hero";
import About from "./components/About";

const Home = () => {
  const isMedia1024 = useMediaQuery(1024);

  return (
    <main
      className={`h-[7000px] ${
        isMedia1024 ? "bg-linear-main-mobile" : "bg-linear-main"
      }`}
    >
      <Hero />
      <About />
    </main>
  );
};

export default Home;
