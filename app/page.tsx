"use client";
import { Analytics } from "@vercel/analytics/react";
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
  return (
    <>
      <main className="main">
        <Analytics />
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
