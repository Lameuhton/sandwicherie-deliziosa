import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section3 = () => {
  return (
    <section className="sides-page-margin flex flex-col md:grid md:grid-cols-12 py-48">
      {/* Text Section */}
      <div className="col-span-7 flex flex-col justify-center items-start bg-white py-12 md:py-16 md:px-24 px-5 md:order-first">
        <h2 className="h2 mb-10">Dégustez sans attendre</h2>
        <p className="small-paragraph mb-8">
          <span className="font-medium">Commandez</span> facilement votre sandwich par <span className="font-medium">téléphone</span> et récupérez-le sans
          attendre ! Que ce soit pour une pause déjeuner rapide ou un repas à
          emporter, profitez de notre service pratique pour savourer nos
          délicieuses recettes où et quand vous le souhaitez.
        </p>
        <Link href="/menu" className="button">
          Commander
        </Link>
      </div>

      {/* Image Section */}
      <div className="col-span-5 relative w-full h-64 md:h-full order-first md:order-none">
        <Image
          src="/sandwich2.jpeg"
          alt="Sandwicherie Deliziosa"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Section3;
