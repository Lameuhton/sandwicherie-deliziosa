import React from "react";
import Image from "next/image";
import Link from 'next/link';

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
        <h1 className="h1 mb-5 text-white">
          Découvrez Toasté
        </h1>
        <p className="paragraph font-extralight text-white leading-[29px] md:w-[60%] mb-8 md:mb-12">
          Des sandwichs savoureux, préparés avec des ingrédients frais et de
          qualité, pour satisfaire toutes vos envies, à tout moment.
        </p>
        
        <Link href="/menu" className="button">Commander votre sandwich</Link>
      </div>
    </section>
  );
};

export default Hero;
