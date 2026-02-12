import React from "react";
import Image from "next/image";
import CustomButton from "./Buttons/CustomButton";

const VotreEspace = ({
  title = "VOTRE ESPACE",
  description,
  buttonText = "DÉCOUVRIR NOS SERVICES",
  buttonLink = "#",
  imageSrc,
  imageAlt = "Espace de travail",
}) => {
  return (
    <section className="votre-espace-section">
      <div className="votre-espace-ellips-right">
        <Image
          src={"/Ellipse.webp"}
          alt={"ellips rigth"}
          fill
          priority
          quality={100}
        />
      </div>
      <div className="votre-espace-ellips-left">
        <Image
          src={"/Ellipse.webp"}
          alt={"ellips left"}
          fill
          priority
          quality={100}
        />
      </div>
      {/* Top Section - Text Content */}
      <div className="votre-espace-top">
        <Image
          src="(.svg"
          alt="("
          width={70}
          height={220}
          className="votre-espace-parenthesis"
        />
        <div className="votre-espace-text-wrapper">
          <h2 className="votre-espace-title">{title}</h2>
          <p className="votre-espace-description">{description}</p>
          <CustomButton
            text={buttonText}
            callBack={buttonLink}
            fontSize="15px"
            fontStyle="italic"
          />
        </div>
        <Image
          src=").svg"
          alt=")"
          width={70}
          height={220}
          className="votre-espace-parenthesis"
        />
      </div>

      {/* Bottom Section - Image */}
      <div className="votre-espace-image-container">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="votre-espace-image"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default VotreEspace;
