"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Analytics />
      <Navbar />
      <main className='main grow-[1] pt-[90px] font-sans lg:pt-[120px] pb-[30px] px-6 lg:px-32'>
        <div className='py-32 lg:py-40'>
          <h1 className='font-bold text-4xl text-center lg:text-7xl'>
            {" "}
            Сторінка не знайдена :(
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
