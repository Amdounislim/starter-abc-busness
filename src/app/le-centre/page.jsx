import React from "react";
import MainSection from "@/components/commons/MainSection";
import HeroSectionCentre from "@/components/commons/HeroSectionCentre";
import TitleDescriptionWithImageCenter from "@/components/commons/TitleDescriptionWithImageCenter";
import FormulesSection from "@/components/commons/Formules/FormulesSection";
import VotreEspace from "@/components/commons/VotreEspace";

const LeCentre = () => {
  return (
    <div>
      <MainSection
        title="LE CENTRE"
        description={
          <>
            <p>
              ABC vous aide à trouver des solutions pour le bon fonctionnement
              de votre entreprise en Principauté Concentrez-vous sur
              l'épanouissement de votre affaire ABC se charge du reste.
            </p>

            <p>
              Situé en plein centre de Monaco, à deux pas de la gare et à
              quelques mètres seulement de l'ensemble et du port, dans le
              quartier très agréable de la Condamine, ABC dispose également d'un
              parking à proximité (parking des Agaves- Parking de la Colle).
            </p>
          </>
        }
        buttonText="DÉCOUVRIR"
        buttonCallback={""}
        imageSrc="/le_centre.webp"
        widthImage="100%"
        paddingDescription="0% 24%"
      />
      <HeroSectionCentre
        imageSrc="/hero_centre.webp"
        title="TRAVAIL EN LIBERTÉ"
        description={
          <>
            <p>
              ABC Business Center est l’un des rares centres d’affaires
              en rez-de-chaussée, offrant des espaces lumineux grâce à
              la lumière naturelle. Il propose des bureaux individuels, dont
              certains avec accès direct et indépendant sur l’extérieur, idéals
              pour recevoir votre clientèle en toute flexibilité.
            </p>
            <p>
              Les locaux sont accessibles 7j/7 et 24h/24, garantissant une
              totale autonomie, avec un service de secrétariat inclus dans les
              offres.
            </p>
          </>
        }
      />
      <TitleDescriptionWithImageCenter
        title="ACCÉDEZ À NOS LOCAUX"
        titleColor="text-orange"
        imageSrc="/Nos_locaux_centre.webp"
        imageAlt="Nos locaux"
        widthImage={616}
        heightImage={530}
        description={
          <>
            <p>
              L’accès aux locaux d’ABC Business Center a été pensé pour
              offrir simplicité, autonomie et sécurité.
            </p>

            <p>
              Situé en rez-de-chaussée, le centre bénéficie d’un accès direct
              depuis l’extérieur, permettant à vos clients et partenaires de
              rejoindre facilement vos bureaux sans passer par des parties
              communes.
            </p>
          </>
        }
        background="linear-gradient(
          45deg,
          #FF6F0059 0%,
          #ffffff 25%,
          #ffffff 100%,
          #FF6F0059 100%
        )"
      />
      <FormulesSection
        title="FORMULES"
        description="Le centre d'affaires propose des formules flexibles adaptées à chaque étape du développement professionnel, du lancement d'une activité à l'implantation de sociétés établies. Open space, bureaux individuels, domiciliation et hébergement administratif : chaque solution offre un cadre professionnel au cœur de Monaco, avec des services conçus pour accompagner durablement les entrepreneurs."
        buttonText="NOS FORMULES"
        buttonLink="/formules"
        formules={[
          {
            id: 1,
            number: "01",
            title: "01. FORMULE START-UP MC",
            description:
              "Mise à disposition d'un espace de travail en Open Space 1/2 journée par semaine",
            duration:
              "Durée : 6 mois à compter de la date de démarrage de l'activité, renouvelable 1 fois",
            price: "300 € H.T. / mois",
            imageSrc: "/formule_1.webp",
          },
          {
            id: 2,
            number: "02",
            title: "02. FORMULE START-UP",
            description:
              "Mise à disposition d'un espace de travail en Open Space 1 jour par semaine",
            duration: "Durée : illimitée (sous certaines conditions)",
            price: "550 € H.T. / mois",
            imageSrc: "/formule_2.webp",
          },
        ]}
      />
      <VotreEspace
        title="VOTRE ESPACE"
        description="Optez pour ABC et bénéficiez d'une autonomie unique en Principauté. Domiciliation, assistance administrative, permanence téléphonique et secrétariat multilingue s'accompagnent de bureaux indépendants de 10 à 30 m², accessibles 7j/7 et 24h/24, avec entrée directe en rez-de-chaussée pour accueillir vos clients en toute simplicité."
        buttonText="DÉCOUVRIR NOS SERVICES"
        buttonLink="/services"
        imageSrc="/votre_espace.webp"
        imageAlt="Espace de travail moderne"
      />
      <TitleDescriptionWithImageCenter
        title="du lundi au vendredi"
        titleColor="text-orange"
        imageSrc="/salle_reunion.webp"
        imageAlt="salle_reunion"
        widthImage={507}
        heightImage={395}
        description={
          <p>
            La salle de réunion, pouvant accueillir <b>jusqu’à 10 personnes,</b>{" "}
            est à votre disposition pour vos conférences, séminaires, formations
            au tarif  horaire <b>de  35 € HT ou 140€</b> HT la demi journée ou{" "}
            <b>270€ HT la journée.</b>
          </p>
        }
      />
    </div>
  );
};

export default LeCentre;
