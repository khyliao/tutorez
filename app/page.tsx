"use client";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import Hero from "@components/Hero";
import Review from "@components/Review";
import Advantage from "@components/Advantage";
import "./globals.css";

const AboutLazy = dynamic(() => import("@components/About"), {
  loading: () => <p>Loading team...</p>,
});

const TeamLazy = dynamic(() => import("@components/Team"), {
  loading: () => <p>Loading team...</p>,
});

const ClientFormLazy = dynamic(() => import("@components/ClientForm"), {
  loading: () => <p>Loading client form...</p>,
});

const StatsLazy = dynamic(() => import("@components/Stats"), {
  loading: () => <p>Loading stats...</p>,
});

const FooterLazy = dynamic(() => import("@components/Footer"), {
  loading: () => <p>Loading footer...</p>,
});

const Home = () => {
  return (
    <>
      <Analytics />
      <main className="main">
        <Hero />
        <AboutLazy />
        <TeamLazy />
        <Advantage />
        <Review />
        <StatsLazy />
        <ClientFormLazy />
      </main>
      <FooterLazy />
    </>
  );
};

export default Home;
