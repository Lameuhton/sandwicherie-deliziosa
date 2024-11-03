import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section1 = () => {
  return (
    <section className="sides-page-margin flex flex-col md:grid md:grid-cols-12 py-48">
      {/* Image Section */}
      <div className="col-span-5 relative w-full h-64 md:h-full order-first">
        <Image
          src="/sandwich1.jpg"
          alt="Sandwicherie Deliziosa"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text Section */}
      <div className="col-span-7 flex flex-col justify-center items-start bg-white py-12 md:py-16 md:px-24 px-5">
        <h2 className="h2 mb-10">Une petite faim ?</h2>
        <p className="small-paragraph mb-8">
          Notre sandwicherie située à{" "}
          <span className="font-medium">Soumagne</span> vous propose un espace
          aménagé pour vous détendre et savourer votre repas. Que ce soit pour
          un petit-déjeuner sucré le matin ou un sandwich rapide à midi, c'est
          l'endroit idéal pour toutes vos envies gourmandes !
        </p>
        <Link href="/menu" className="button">
          Voir le menu
        </Link>
      </div>
    </section>
  );
};

export default Section1;
