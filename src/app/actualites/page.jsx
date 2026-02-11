import React from "react";
import MainSection from "@/components/commons/MainSection";
import ArticlesList from "@/components/commons/Articles/ArticlesList";

const Actualites = () => {
  return (
    <div>
      <MainSection
        title="ACTUALITÉ"
        description={
          <>
            <p>
              Découvrez les actualités du centre d’affaires ABC nouveautés
              services événements et informations essentielles pour accompagner
              le développement de votre activité au cœur de Monaco.
            </p>
          </>
        }
        buttonText="DÉCOUVRIR"
        buttonCallback={""}
        paddingDescription="0% 22%"

        imageSrc="/ACTUALITES.webp"
        widthImage="100%"
        heightImage="250px"
      />
      <ArticlesList />
    </div>
  );
};

export default Actualites;
