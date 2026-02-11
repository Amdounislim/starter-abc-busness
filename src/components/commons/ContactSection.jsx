"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "./Buttons/CustomButton";

/**
 * Composant ContactSection : formulaire de contact avec image
 * @param {string} image_url - L'URL de l'image de contact
 * @param {string} phoneNumber - Le numéro de téléphone à afficher
 * @param {string} phoneText - Le texte sous le numéro de téléphone
 */
const ContactSection = ({
  image_url = "/contact_image.webp",
  phoneNumber = "+377 99 99 63 20",
  phoneText = "Une Question ? Appelez-Nous 24/24",
}) => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    demande: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left side - Image with phone */}
        <div className="contact-image-container">
          <div className="contact-image-wrapper">
            <Image
              src={image_url}
              alt="Contact"
              fill
              quality={100}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="contact-image-overlay"></div>
          </div>

          <div className="contact-phone-badge">
            <div className="phone-badge">
              <Image
                src="/Vector_phone.svg"
                alt="Phone"
                width={20}
                height={20}
              />

              <span className="phone-number">{phoneNumber}</span>
            </div>
            <div className="phone-text">
              <span className="phone-subtitle">{phoneText}</span>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="contact-form-container">
          <h1 className="contact-title">CONTACTEZ-NOUS</h1>
          <p className="contact-description">
            Contactez nous pour toute question ou demande d'information notre
            équipe vous répondra dans les meilleurs délais.
          </p>

          <form className="contact-form font-montserrat" onSubmit={handleSubmit}>
            <div className="form-row font-montserrat">
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={formData.prenom}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              className="form-input full-width"
              required
            />

            <input
              type="tel"
              name="telephone"
              placeholder="Téléphone"
              value={formData.telephone}
              onChange={handleChange}
              className="form-input full-width"
              required
            />

            <input
              type="text"
              name="demande"
              placeholder="Votre Demande"
              value={formData.demande}
              onChange={handleChange}
              className="form-input full-width"
              required
            />

            <textarea
              name="message"
              placeholder="Votre Message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows="5"
              required
            />

            {/* <button type="submit" className="form-submit-button">
              Envoyer
            </button> */}
            <CustomButton
              text="Envoyer"
              onClick={""}
               fontSize="15px"
              className="form-submit-button"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
