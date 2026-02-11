import React from "react";
import Image from "next/image";

const HeroSectionCentre = ({ imageSrc, title, description }) => {
  return (
    <div className="hero-section-centre">
      <div className="hero-centre-background">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="hero-centre-image"
          priority
        />
        <div className="hero-centre-overlay"></div>
      </div>

      <div className="hero-centre-content">
        <h1 className="hero-centre-title">{title}</h1>
        <div className="hero-centre-description">{description}</div>
      </div>
    </div>
  );
};

export default HeroSectionCentre;
