"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import Hero from "@components/Hero";
import About from "@components/About";
import Footer from "@components/Footer";
import "./globals.css";
import Navbar from "./components/Navbar";
import QrModal from "./components/QrModal";

const LazyComponents = {
  Team: dynamic(() => import("@components/Team"), { ssr: false }),
  Advantage: dynamic(() => import("@components/Advantage"), { ssr: false }),
  ClientForm: dynamic(() => import("@components/ClientForm"), { ssr: false }),
  Review: dynamic(() => import("@components/Review"), { ssr: false }),
  Stats: dynamic(() => import("@components/Stats"), { ssr: false }),
};

const Home = () => {
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("openModal") === "true") {
      setIsModalOpen(true);
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [searchParams]);

  return (
    <>
      <Analytics />
      <main className="main">
        <Navbar />
        <Hero />
        <About />
        <LazyComponents.Advantage />
        <LazyComponents.Team />
        <LazyComponents.Stats />
        <LazyComponents.ClientForm />
      </main>
      <Footer />

      {isModalOpen && <QrModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Home;
