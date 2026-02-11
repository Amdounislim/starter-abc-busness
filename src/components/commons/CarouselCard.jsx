"use client";
import React from "react";
import Image from "next/image";

const CarouselCard = ({
  title = "ESPACES ET ÉQUIPEMENTS PROFESSIONNELS",
  description = "Les espaces de travail sont pensés pour offrir confort et efficacité avec un accès Internet haut débit, la climatisation et le chauffage, l'entretien des locaux, les consommations, d'eau et d'électricité incluses ainsi qu'un espace tisanerie. Des services d'impression de digitalisation et de traduction sont également disponibles.",
  buttonText = "NOUS CONTACTER",
  imageSrc = "/carousel_bg.webp",
  onButtonClick,
  paddingTitle = "",
  centerImage,
  paddingImageCenterTop,
  paddingImageCenterBottom,
}) => {
  return (
    <div className="carousel-card-container">
      <div className="carousel-card-background">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="carousel-card-image"
          style={{ objectFit: "cover" }}
        />
        <div className="carousel-card-overlay"></div>
      </div>

      <div className="carousel-card-content">
        <h2 className="carousel-card-title" style={{ padding: paddingTitle }}>
          {title}
        </h2>
        {centerImage && (
          <div>
            <Image
              src={centerImage}
              alt={title}
              width={309.9013366699219}
              height={365}
              className="carousel-card-center-image"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                paddingTop: paddingImageCenterTop,
                paddingBottom: paddingImageCenterBottom,
              }}
            />
          </div>
        )}
        <p className="carousel-card-description">{description}</p>
        {buttonText && (
          <button className="carousel-card-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default CarouselCard;
