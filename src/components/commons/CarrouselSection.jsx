"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css/core";

// Default theme
// import "@splidejs/react-splide/css";

// or other themes
// import "@splidejs/react-splide/css/sea-green";
/**
 * Composant CarrouselSection : représente un carrousel de diapositives.
 * @param {array} cards - Un tableau contenant les éléments à afficher dans le carrousel.
 * @param {number} gap - L'espace entre les diapositives du carrousel.
 * @param {number} perPage - Le nombre de diapositives à afficher par page dans le carrousel.
 * @param {number} perMove - Le nombre de diapositives à déplacer à chaque fois.
 * @param {string} width - La largeur du carrousel.
 * @param {boolean} pauseOnHover - Indique si le carrousel doit être mis en pause lorsqu'il est survolé par la souris.
 * @param {boolean} autoplay - Indique si le carrousel doit démarrer automatiquement.
 * @param {boolean} hasTrack - Indique si le carrousel doit afficher une piste de défilement.
 * @param {boolean} pagination - Indique si le carrousel doit afficher une pagination.
 * @param {boolean} rewind - Indique si le carrousel doit rebobiner lorsque la fin ou le début est atteint.
 * @param {string} svgPrev - L'URL de l'icône SVG pour la flèche précédente.
 * @param {string} svgNext - L'URL de l'icône SVG pour la flèche suivante.
 * @param {string} arrowPosition - La position des flèches dans le carrousel (par exemple : "top", "bottom").
 * @param {string} arrowsContainerClassName - Les classes CSS du conteneur des flèches.
 * @param {string} arrowClassName - Les classes CSS des flèches.
 */

const CarrouselSection = ({
  cards,
  gap,
  perPage,
  perMove,
  width,
  pauseOnHover,
  autoplay,
  hasTrack,
  pagination,
  rewind,
  svgPrev,
  svgNext,
  arrowPosition,
  arrowsContainerClassName,
  arrowClassName,
}) => {
  const breakPoints = {
    610: {
      perPage: 1,
      arrows: false,
    },
    1200: {
      perPage: 2,
    },
    1460: {
      perPage: 3,
    },
    830: {
      arrows: false,
    },
  };

  const handleArrowPosition = () => {
    if (arrowPosition === "bottom") {
      return { top: "100%" };
    } else if (arrowPosition === "top") {
      return { bottom: "100%" };
    } else {
      return { top: "50%", bottom: "50%" };
    }
  };
  return (
    <Splide
      className="carousel-section-wrapper"
      hasTrack={false}
      aria-label="..."
      options={{
        width,
        rewind,
        perMove,
        perPage,
        gap,
        autoplay,
        pauseOnHover,
        wheel: true,
        hasTrack,
        pagination,
        gap,
        mediaQuery: "max",
        breakpoints: breakPoints,
      }}
    >
      <div
        className={`splide__arrows ${arrowsContainerClassName}`}
        style={{
          position: "absolute",
          ...handleArrowPosition(),
          zIndex: "10",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        <div
          className={`splide__arrow splide__arrow--prev carousel-arrow ${arrowClassName}`}
          style={{
            position: "absolute",
            left: "40px",
          }}
        >
          <Image
            src="/Vector_carousel_previous.svg"
            alt="previous"
            width={26.66}
            height={12}
          />
        </div>
        <div
          className={`splide__arrow splide__arrow--next carousel-arrow ${arrowClassName}`}
          style={{
            position: "absolute",
            right: "40px",
          }}
        >
          <Image
            src="/Vector_carousel_next.svg"
            alt="next"
            width={26.66}
            height={12}
          />
        </div>
      </div>
      <SplideTrack>
        {cards.map((card, i) => (
          <SplideSlide key={i}>{card}</SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};

export default CarrouselSection;
