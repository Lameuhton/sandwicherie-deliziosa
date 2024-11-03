import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section2 = () => {
  return (
    <section className="sides-page-margin text-white text-center">
      <div className="flex flex-col items-center">
        <h2 className="h2 mb-10 w-fit">Vos envies, vos règles !</h2>
        <div className="flex flex-col gap-2 px-20">
          <p className="small-paragraph mb-8">
            Vous préférez un <span className="font-medium">sandwich végétarien </span>? Ou bien vous avez une envie
            soudaine de <span className="font-medium">dagober</span>t plutôt sans sauce ? Tout est possible chez
            nous.
          </p>
          <p className="small-paragraph mb-8">
            Chez Deliziosa, nous savons que chaque personne a ses propres goûts
            et ses propres envies. C'est pourquoi nous vous proposons de
            <span className="font-medium"> composer</span> votre propre sandwich, selon vos <span className="font-medium">préférences</span>. Vous
            choisissez les ingrédients, nous nous chargeons du reste !
          </p>
          <p className="small-paragraph mb-8">
            Et pour les plus matinaux, vous aurez également le choix du
            <span className="font-medium"> petit-déjeuner</span> sucré ou salé. De quoi satisfaire les goûts et envies
            de chacun !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
