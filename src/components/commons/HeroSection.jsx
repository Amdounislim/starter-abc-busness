"use client";
import React from "react";
import Image from "next/image";
/**
 * Composant HeroSection : représente une section héroïque avec un titre et un sous-titre.
 * @param {string} image_url - L'URL de l'image de fond de la section héroïque.
 * @param {string} title - Le titre de la section héroïque.
 * @param {string} subtitle - Le sous-titre de la section héroïque.
 * @param {string} titleColor - La classe du titre de la section héroïque.
 * @param {string} subtitleColor - La classe du sous-titre de la section héroïque.
 */
const HeroSection = ({
  image_url,
  title,
  subtitle1,
  subtitle2,
  titleClass,
  subtitleClass,
  description,
}) => {
  return (
    <section className="hero_section gnPadding">
      <div className="hero_background">
        <Image
          src={image_url}
          alt={title || "Hero background"}
          fill
          priority
          quality={100}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="hero_overlay"></div>
      <div></div>
      <div className="titles flexCenterColumn hero-title-container">
        <h1 className="hero-title-line1">{title}</h1>
        <h1 className="hero-title-line2">{subtitle1}</h1>
        <h1 className="hero-title-line3">{subtitle2}</h1>
      </div>
      <div className="hero_bottom_text">
        <p>{description}</p>
        <div className="h_line"></div>
      </div>
    </section>
  );
};

export default HeroSection;
