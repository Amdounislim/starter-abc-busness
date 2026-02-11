import React from "react";
import Image from "next/image";
import CustomButton from "./Buttons/CustomButton";

/**
 * MainSection - A reusable section with background text, title, description, and button
 * @param {string} backgroundText - Large background text
 * @param {string} title - Main title
 * @param {string} description - Description text (can be multiple paragraphs)
 * @param {string} buttonText - Button text
 * @param {function} buttonCallback - Button click handler
 * @param {string} imageSrc - Background image source
 * @param {string} backgroundColor - Background color (optional)
 */
const MainSection = ({
  title = "LE CENTRE",
  description,
  buttonText = "DÉCOUVRIR",
  buttonCallback,
  imageSrc,
  paddingDescription = "0% 23%",
  widthImage = "100%",
  heightImage = "210px",
  background = `linear-gradient(
      135deg,
      #FF6F0059 0%,
      #ffffff 25%,
      #ffffff 75%,
      #FF6F0059 100%
    )`,
}) => {
  return (
    <section
      className="main-section"
      style={{
        background,
      }}
    >
      {imageSrc && (
        <div
          className="main-section-image-wrapper"
          style={{ width: widthImage, height: heightImage }}
        >
          <Image
            src={imageSrc}
            alt={title || "Background"}
            quality={100}
            fill
            className="main-section-image"
          />
        </div>
      )}

      <div className="main-section-content">
        <h2 className="main-section-title text-orange">{title}</h2>
        {description && (
          <div
            className="main-section-description"
            style={{ padding: paddingDescription }}
          >
            {description}
          </div>
        )}
        {buttonText && (
          <CustomButton
            text={buttonText}
            callBack={buttonCallback}
            fontSize="15px"
            fontStyle="italic"
          />
        )}
      </div>
    </section>
  );
};

export default MainSection;
