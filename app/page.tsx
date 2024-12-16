"use client";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import Hero from "@components/Hero";
import About from "@components/About";
import Footer from "@components/Footer";
import "./globals.css";
import Navbar from "./components/Navbar";

const TeamLazy = dynamic(() => import("@components/Team"));

const AdvantageLazy = dynamic(() => import("@components/Advantage"));

const ClientFormLazy = dynamic(() => import("@components/ClientForm"));

const ReviewLazy = dynamic(() => import("@components/Review"));

const StatsLazy = dynamic(() => import("@components/Stats"));

const Home = () => {
  return (
    <>
      <Analytics />
      <main className="main">
        <Navbar />
        <Hero />
        <About />
        <TeamLazy />
        <AdvantageLazy />
        <ReviewLazy />
        <StatsLazy />
        <ClientFormLazy />
      </main>
      <Footer />
    </>
  );
};

export default Home;
