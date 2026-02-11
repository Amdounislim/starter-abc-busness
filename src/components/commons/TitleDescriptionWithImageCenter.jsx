import React from "react";
import Image from "next/image";

/**
 * TitleDescriptionWithImageCenter - A reusable component with centered title, image, and description
 * @param {string} title - Title text
 * @param {string} imageSrc - Image source path
 * @param {string} imageAlt - Image alt text
 * @param {React.ReactNode} description - Description content (can include HTML/JSX)
 * @param {string} backgroundColor - Background color (optional)
 * @param {string} titleColor - CSS class for title color (optional)
 */
const TitleDescriptionWithImageCenter = ({
  title,
  imageSrc,
  imageAlt,
  widthImage,
  heightImage,
  description,
  background,
  titleColor,
}) => {
  return (
    <section
      className="title-description-image-center-section"
      style={{ background }}
    >
      <div className="center-content-container">
        <h2 className={`center-section-title ${titleColor}`}>{title}</h2>

        <div className="center-image-wrapper">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={widthImage}
            height={heightImage}
            className="center-image"
          />
        </div>

        {description && (
          <div className="center-section-description">{description}</div>
        )}
      </div>
    </section>
  );
};

export default TitleDescriptionWithImageCenter;
