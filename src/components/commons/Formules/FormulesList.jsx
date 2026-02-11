import React from "react";
import FormuleCard from "./FormuleCard";

const FormulesList = () => {
  // Sample data - replace with your actual data
  const formules = [
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
    {
      id: 3,
      number: "03",
      title: "03. FORMULE PRIMO R",
      description: "Mise à disposition d'un bureau individuel",
      duration: "Durée : 12 mois renouvelable",
      price: "600 € H.T. / mois",
      imageSrc: "/formule_3.webp",
    },
    {
      id: 4,
      number: "04",
      title: "04. FORMULE PRIMO",
      description: "Mise à disposition d'un bureau individuel avec services",
      duration: "Durée : 12 mois renouvelable",
      price: "750 € H.T. / mois",
      imageSrc: "/formule_4.webp",
    },
    {
      id: 5,
      number: "05",
      title: "05. FORMULE PRIMO +",
      description: "Mise à disposition d'un bureau individuel premium",
      duration: "Durée : 12 mois renouvelable",
      price: "900 € H.T. / mois",
      imageSrc: "/formule_5.webp",
    },
    {
      id: 6,
      number: "06",
      title: "06. FORMULE CAMPUS",
      description: "Mise à disposition d'un espace de coworking",
      duration: "Durée : flexible",
      price: "350 € H.T. / mois",
      imageSrc: "/formule_6.webp",
    },
    {
      id: 7,
      number: "07",
      title: "07. FORMULE CAMPUS +",
      description: "Mise à disposition d'un espace de coworking premium",
      duration: "Durée : flexible",
      price: "500 € H.T. / mois",
      imageSrc: "/formule_7.webp",
    },
    {
      id: 8,
      number: "08",
      title: "08. FORMULE BUREAUX INDIVIDUELS",
      description: "Bureau privatif avec services complets",
      duration: "Durée : 12 mois renouvelable",
      price: "1200 € H.T. / mois",
      imageSrc: "/formule_8.webp",
    },
    {
      id: 9,
      number: "09",
      title: "09. DOMICILIATION",
      description: "Service de domiciliation d'entreprise",
      duration: "Durée : 12 mois renouvelable",
      price: "150 € H.T. / mois",
      imageSrc: "/formule_9.webp",
    },
    {
      id: 10,
      number: "10",
      title: "10. HÉBERGEMENT ADMINISTRATIF",
      description: "Hébergement administratif complet",
      duration: "Durée : 12 mois renouvelable",
      price: "250 € H.T. / mois",
      imageSrc: "/formule_10.webp",
    },
  ];

  return (
    <div className="formules-list-container">
      <div className="formules-grid">
        {formules.map((formule) => (
          <FormuleCard
            key={formule.id}
            number={formule.number}
            title={formule.title}
            description={formule.description}
            duration={formule.duration}
            price={formule.price}
            imageSrc={formule.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default FormulesList;
