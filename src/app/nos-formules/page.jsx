import React from "react";
import MainSection from "@/components/commons/MainSection";
import FormulesList from "@/components/commons/Formules/FormulesList";

const NosFormules = () => {
  return (
    <div>
      <MainSection
        title="Nos formules"
        description={
          <>
            <p>
              Le centre d’affaires ABC accompagne les entrepreneurs et les
              sociétés à chaque étape de leur développement en proposant des
              solutions flexibles de domiciliation d’hébergement administratif
              d’open space et de bureaux individuels au cœur de Monaco chaque
              formule est pensée pour offrir un cadre de travail professionnel
              accessible et évolutif adapté aux besoins des indépendants des
              start up et des entreprises établies.
            </p>
          </>
        }
        buttonText="NOUS CONTACTER"
        buttonCallback={""}
        imageSrc="/formules.webp"
        widthImage="100%"
        paddingDescription="0% 19%"
      />
      <FormulesList />
    </div>
  );
};

export default NosFormules;
