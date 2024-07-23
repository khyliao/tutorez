"use client";
import { useMediaQuery } from "@hooks/useMediaQuery";
import Hero from "@components/Hero";
import About from "@components/About";
import Team from "@components/Team";
import Advantage from "@components/Advantage";
import Review from "@components/Review";
import Stats from "./components/Stats";
import ClientForm from "./components/ClientForm";
import Footer from "./components/Footer";
import "./globals.css";
const Home = () => {
  const isMedia1024 = useMediaQuery(1024);

  return (
    <>
      <main className="main">
        <Hero />
        <About />
        <Team />
        <Advantage />
        <Review />
        <Stats />
        <ClientForm />
      </main>
      <Footer />
    </>
  );
};

export default Home;
