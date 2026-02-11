import React from "react";
import CustomButton from "./Buttons/CustomButton";
import Image from "next/image";
/**
 * Composant SplitScreenSection : représente une section avec une image et du contenu, divisée en deux parties.
 * @param {string} image_url - L'URL de l'image à afficher dans la section.
 * @param {string} description - La description de la section.
 * @param {string} content - Le contenu principal de la section.
 * @param {string} buttonText - Le texte du bouton de la section.
 * @param {function} onClick - La fonction à appeler lors du clic sur le bouton.
 * @param {boolean} reverse - Indique si l'ordre de la disposition de l'image et du contenu doit être inversé.
 */

const SplitScreenSection = ({
  title = null,
  titleClass = null,
  subtitle = null,
  subtitleClass = null,
  description = null,
  descriptionClass = null,
  content = null,
  contentClass = null,
  buttonText = null,
  image_url,
  height = "400",
  callBack = null,
  reverse = false,
}) => {
  return (
    <div
      className={`w100 alignC border ${
        reverse ? "flex-xl-row flex-column" : "flex-xl-row-reverse flex-column"
      }`}
      style={{ minHeight: `${height}px` }}
    >
      <div className="w50 wm100 h100 border position-relative">
        <Image
          width={100}
          height={100}
          layout="responsive"
          src={image_url}
          alt="hero"
        />
      </div>
      <div className={`w50 wm100 h100 flexCenter flex-column p-5 gap-1`}>
        <p className={`w100 ${titleClass}`}>{title}</p>
        <p className={`w100 ${subtitleClass}`}>{subtitle}</p>
        <p className={`w100 ${descriptionClass}`}>{description}</p>
        <p className={`w100 ${contentClass}`}>{content}</p>
        <CustomButton callBack={callBack} text={buttonText} />
      </div>
    </div>
  );
};

export default SplitScreenSection;
