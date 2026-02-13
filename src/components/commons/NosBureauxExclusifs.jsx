import React from "react";
import Image from "next/image";
import CustomButton from "./Buttons/CustomButton";
/**
 * NosBureauxExclusifs - A reusable component with title, description, button, and image grid
 * @param {React.ReactNode} title - Title content (can include HTML tags)
 * @param {string} description - Description text below title
 * @param {string} buttonText - Text for the CTA button
 * @param {string} buttonLink - Link for the button
 * @param {Array} images - Array of image objects with src, alt, width, height
 * @param {string} titleColor - CSS class for title color (optional)
 * @param {string} backgroundColor - Background color (optional)
 */
const NosBureauxExclusifs = ({
  title,
  description,
  buttonText,
  buttonLink = "#",
  images = [],
  titleColor = "text-orange",
  background = "transparent",
  gapImages,
}) => {
  return (
    <section
      className="title-description-images-section"
      style={{ background }}
    >
      <div className="title-description-container mb-4">
        <div className={`section-main-title ${titleColor}`}>{title}</div>
        {description && <p className="section-description">{description}</p>}
      </div>
      {images.length > 0 && (
        <div
          className="d-flex align-items-start justify-content-center"
          style={{ gap: gapImages }}
        >
          {images.map((image, index) =>
            index === 1 ? (
              <div className="flexCenterColumn gap-5">
                {buttonText && (
                  <CustomButton
                    text={buttonText}
                    allBack={""}
                    fontSize="15px"
                    fontStyle="italic"
                  />
                )}
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </div>
            ) : (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="mt-3"
              />
            )
          )}
        </div>
      )}
    </section>
  );
};

export default NosBureauxExclusifs;
