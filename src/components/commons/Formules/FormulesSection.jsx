import React from "react";
import FormuleCard from "./FormuleCard";
import CustomButton from "../Buttons/CustomButton";

const FormulesSection = ({ 
  title = "FORMULES",
  description,
  buttonText = "NOS FORMULES",
  buttonLink = "#",
  formules = []
}) => {
  return (
    <section className="formules-section">
      <div className="formules-container">
        {/* Left Side - Text Content */}
        <div className="formules-left">
          <h2 className="formules-heading">{title}</h2>
          <p className="formules-description">{description}</p>
          {/* <a href={buttonLink} className="formules-button">
            {buttonText}
          </a> */}
           <CustomButton
            text={buttonText}
            callBack={""}
            fontSize="15px"
            fontStyle="italic"
          />
        </div>

        {/* Right Side - Formule Cards */}
        <div className="formules-right">
          {formules.map((formule, index) => (
            <FormuleCard
              key={index}
              number={formule.number}
              title={formule.title}
              description={formule.description}
              duration={formule.duration}
              price={formule.price}
              imageSrc={formule.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormulesSection;
