import React from "react";
import MainSection from "@/components/commons/MainSection";
import VisitezEspaces from "@/components/commons/VisitezEspaces";
import CarrouselSection from "@/components/commons/CarrouselSection";
import CarouselCard from "@/components/commons/CarouselCard";

const Services = () => {
  return (
    <div>
      <MainSection
        title="NOS SERVICES"
        description={
          <>
            <p>
              Quel que soit l’espace de travail choisi chez ABC vous bénéficiez
              d’une offre de services complète pensée pour faciliter votre
              activité au quotidien la domiciliation de votre entreprise la
              permanence téléphonique l’accueil et la réception de votre
              clientèle ainsi que la gestion de votre courrier sont inclus des
              services complémentaires sont proposés en option comme
              l’attribution d’un numéro de téléphone monégasque et le
              secrétariat.
            </p>
          </>
        }
        buttonText="DÉCOUVRIR"
        buttonCallback={""}
        imageSrc="/SERVICES.webp"
        widthImage="90%"
        paddingDescription="0% 24%"
        background="linear-gradient(
          135deg,
          #ff6f001a 0%,
          #ffffff 25%,
          #ffffff 100%,
          #ff6f001a 100%
        )"
      />
      <VisitezEspaces
        images={[
          { id: 1, src: "/Nos_espace_1.webp", alt: "Espace 1" },
          { id: 2, src: "/Nos_espace_2.webp", alt: "Espace 2" },
          { id: 3, src: "/Nos_espace_3.webp", alt: "Espace 3" },
          { id: 4, src: "/Nos_espace_4.webp", alt: "Espace 4" },
          { id: 5, src: "/Nos_espace_5.webp", alt: "Espace 5" },
        ]}
      />
      <CarrouselSection
        rewind={true}
        width="100%"
        perPage={1}
        arrowPosition="middle"
        perMove={1}
        gap={0}
        svgNext={"/icons/nextCarouselArrow.svg"}
        svgPrev={"/icons/prevCarouselArrow.svg"}
        cards={[
          {
            title: "UNE SOLUTION CLÉ EN MAIN",
            description:
              "ABC propose une solution complète intégrant la domiciliation de votre activité la gestion du courrier la permanence téléphonique l’accueil de votre clientèle ainsi que des services de secrétariat et l’attribution d’un numéro monégasque en option pour vous permettre de vous concentrer pleinement sur votre activité.",
            buttonText: "NOUS CONTACTER",
            imageSrc: "/carousel_image_1.webp",
            paddingTitle:"40px 25%"
          },
          {
            title: "ESPACES ET ÉQUIPEMENTS PROFESSIONNELS",
            description:
              "Les espaces de travail sont pensés pour offrir confort et efficacité avec un accès internet haut débit la climatisation et le chauffage l’entretien des locaux les consommations d’eau et d’électricité incluses ainsi qu’un espace tisanerie des services d’impression de digitalisation et de traduction sont également disponibles.",
            buttonText: "NOUS CONTACTER",
            imageSrc: "/carousel_image_2.webp",
            paddingTitle:"40px 10%"
          },
          {
            title: "RÉUNIONS ET ACCÈS FLEXIBLE",
            description:
              "Une salle de réunion équipée est mise à disposition pour vos conférences séminaires ou formations à la demi journée à la journée ou à la semaine sur demande le business center est accessible vingt quatre heures sur vingt quatre et sept jours sur sept grâce à un badge d’accès personnel.",
            buttonText: "NOUS CONTACTER",
            imageSrc: "/carousel_image_3.webp",
            paddingTitle:"40px 25%"
          },
          {
            title: "EMPLACEMENT STRATÉGIQUE À MONACO",
            description:
              "Idéalement situé au cœur de Monaco le centre d’affaires ABC bénéficie d’une localisation privilégiée à proximité immédiate de la gare et des parkings La Colle et Les Agaves facilitant l’accès pour vous et votre clientèle.",
            buttonText: "NOUS CONTACTER",
            imageSrc: "/carousel_image_4.webp",
            paddingTitle:"40px 10%"
          },
        ].map((card, index) => (
          <CarouselCard
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            imageSrc={card.imageSrc}
            paddingTitle={card.paddingTitle}
          />
        ))}
      />
    </div>
  );
};

export default Services;
