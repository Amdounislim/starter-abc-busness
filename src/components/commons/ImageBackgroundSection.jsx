import React from "react";
/**
 * Composant ImageBackgroundSection : représente une section avec une image de fond et du contenu superposé.
 * @param {string} image_url - L'URL de l'image de fond.
 * @param {string} buttonText - Le texte du bouton.
 * @param {string} buttonTextClass - La couleur du texte du bouton.
 * @param {string} title - Le titre de la section.
 * @param {string} subtitle - Le sous-titre de la section.
 * @param {string} description - La description de la section.
 * @param {string} descriptionClass - La couleur de la description.
 * @param {function} onclick - La fonction à exécuter lorsqu'on clique sur le bouton.
 * @param {string} titleClass - La couleur du titre.
 * @param {string} subtitleClass - La couleur du sous-titre.
 */

const ImageBackgroundSection = ({
  title = null,
  titleClass = null,
  subtitle = null,
  subtitleClass = null,
  description = null,
  descriptionClass = null,
  buttonTextClass,
  buttonText = null,
  image_url,
  height = "600",
  onclick,
}) => {
  return (
    <section
      className="d-flex flex-column image_section gap-5 p-5 w100"
      style={{
        backgroundImage: `url(${image_url})`,
        minHeight: `${height}px`,
      }}
    >
      <div className="h100 w50 d-flex flex-column gap-5">
        <h2 className={`${titleClass}`}>{title}</h2>
        <h3 className={`${subtitleClass}`}>{subtitle}</h3>

        <p className={`${descriptionClass}`}>{description}</p>

        <button className={`${buttonTextClass} w100`} onClick={onclick}>
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default ImageBackgroundSection;
