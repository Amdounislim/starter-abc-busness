"use client";
import React, { useState } from "react";
import Image from "next/image";

const FormuleCard = ({
  number,
  title,
  description,
  duration,
  price,
  imageSrc,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="formule-card">
      <h3 className="formule-title">{title}</h3>

      <div
        className="formule-image-container t03"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="formule-image"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="formule-details">
            <div className="formule-number">{number}</div>
            <p className="formule-description">{description}</p>
            <p className="formule-description">{duration}</p>
            <div className="formule-price">{price}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormuleCard;
