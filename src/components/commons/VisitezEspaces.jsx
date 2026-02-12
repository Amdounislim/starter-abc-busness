import React from "react";
import Image from "next/image";
import CustomButton from "./Buttons/CustomButton";
const VisitezEspaces = ({
  title,
  description,
  images,
  buttonText,
  background,
}) => {
  return (
    <div className="visitez-espaces-container" style={{ background }}>
      {title && <h2 className="visitez-title">{title}</h2>}

      {description && <p className="visitez-description">{description}</p>}

      <div className="visitez-images">
        {images &&
          images.map((image) => (
            <div key={image.id} className="visitez-image-wrapper">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="visitez-image"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
      </div>
      {buttonText && (
        <CustomButton
          text={buttonText}
          allBack={""}
          fontSize="15px"
          fontStyle="italic"
        />
      )}
    </div>
  );
};

export default VisitezEspaces;
