import React from "react";
import Image from "next/image";
import CustomButton from "../commons/Buttons/CustomButton";
/**
 * TitleDescriptionWithImages - A reusable component with title, description, button, and image grid
 * @param {React.ReactNode} title - Title content (can include HTML tags)
 * @param {string} description - Description text below title
 * @param {string} buttonText - Text for the CTA button
 * @param {string} buttonLink - Link for the button
 * @param {Array} images - Array of image objects with src, alt, width, height
 * @param {string} titleColor - CSS class for title color (optional)
 * @param {string} backgroundColor - Background color (optional)
 */
const TitleDescriptionWithImages = ({
  title,
  description,
  buttonText,
  buttonLink = "#",
  images = [],
  titleColor = "text-orange",
  background = "#fff",
  gapImages,
}) => {
  return (
    <section
      className="title-description-images-section"
      style={{ background }}
    >
      <div className="title-description-container">
        <div className={`section-main-title ${titleColor}`}>{title}</div>
        {description && <p className="section-description">{description}</p>}
        {buttonText && (
          <CustomButton
            text={buttonText}
            allBack={""}
            fontSize="15px"
            fontStyle="italic"
          />
        )}
      </div>

      {/* {images.length > 0 && (
        <div className="images-grid-container">
          <div className="images-grid-left">
            {images[0] && (
              <div className="image-wrapper-grid">
                <Image
                  src={images[0].src}
                  alt={images[0].alt || "Image 1"}
                  width={images[0].width || 250}
                  height={images[0].height || 350}
                  className="grid-image"
                />
              </div>
            )}
            {images[1] && (
              <div className="image-wrapper-grid">
                <Image
                  src={images[1].src}
                  alt={images[1].alt || "Image 2"}
                  width={images[1].width || 250}
                  height={images[1].height || 200}
                  className="grid-image"
                />
              </div>
            )}
          </div>

          <div className="images-grid-center">
            {images[2] && (
              <div className="image-wrapper-grid">
                <Image
                  src={images[2].src}
                  alt={images[2].alt || "Image 3"}
                  width={images[2].width || 250}
                  height={images[2].height || 250}
                  className="grid-image"
                />
              </div>
            )}
          </div>

          <div className="images-grid-right">
            {images[3] && (
              <div className="image-wrapper-grid">
                <Image
                  src={images[3].src}
                  alt={images[3].alt || "Image 4"}
                  width={images[3].width || 250}
                  height={images[3].height || 200}
                  className="grid-image"
                />
              </div>
            )}
            {images[4] && (
              <div className="image-wrapper-grid">
                <Image
                  src={images[4].src}
                  alt={images[4].alt || "Image 5"}
                  width={images[4].width || 250}
                  height={images[4].height || 200}
                  className="grid-image"
                />
              </div>
            )}
          </div>
        </div>
      )} */}
      {images.length > 0 && (
        <div className="d-flex align-items-end justify-content-center" style={{ gap: gapImages }}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TitleDescriptionWithImages;
