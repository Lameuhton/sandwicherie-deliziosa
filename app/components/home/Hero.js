import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="h-screen flex flex-col justify-center items-start "
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="sides-page-margin">
        <h1 className="h1 mb-2 text-white">
          Sandwicherie Deliziosa
        </h1>
        <p className="text-[24px] text-white">
          Des sandwichs savoureux, préparés avec des ingrédients frais et de
          qualité, pour satisfaire toutes vos envies, à tout moment.
        </p>
        <button className="button">
          Commander votre sandwich
        </button>
      </div>
    </section>
  );
};

export default Hero;
