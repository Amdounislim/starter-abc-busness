import React from "react";
import "../../styles/layout/Footer.css";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footer_background">
        <Image
          src={"/bg_footer.webp"}
          alt={"Footer background"}
          fill
          priority
          quality={100}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="ellips-right">
        <Image
          src={"/Ellipse.webp"}
          alt={"ellips rigth"}
          fill
          priority
          quality={100}
        />
      </div>
      <div className="ellips-left">
        <Image
          src={"/Ellipse.webp"}
          alt={"ellips left"}
          fill
          priority
          quality={100}
        />
      </div>
      <div className="footer_content">
        <div className="footer_main">
          <div className="footer_address_section">
            <p className="footer_label font-montserrat">Notre Adresse</p>
            <h2 className="footer_address font-montserrat">
              5-7 Rue Castelleretto
              <br />
              98000 Monaco
            </h2>
          </div>

          <div className="footer_buttons">
            <div className="flexCenterColumn font-montserrat">
              <button className="footer_button footer_button_location">
                <Image
                  src="/localisation.svg"
                  width={20}
                  height={20}
                  alt="localisation"
                />
                ABC Business Center
              </button>
              <p className="footer_button_subtitle font-montserrat">Retrouvez-nous ici</p>
            </div>

            <div className="flexCenterColumn font-montserrat">
              <button className="footer_button footer_button_phone">
                <Image src="/phone.svg" width={20} height={20} alt="phone" />
                +377 99 99 63 20
              </button>
              <p className="footer_button_subtitle font-montserrat">
                Une Question ? Appelez-Nous 24/24
              </p>
            </div>
          </div>

          <div className="footer_social">
            <a href="#" className="social_icon facebook">
            <Image
                  src="/facebook.svg"
                  width={40}
                  height={40}
                  alt="localisation"
                />
            </a>
            <a href="#" className="social_icon linkedin">
            <Image
                  src="/linkedin.svg"
                  width={40}
                  height={40}
                  alt="localisation"
                />
            </a>
            <a href="#" className="social_icon instagram">
            <Image
                  src="/instagrame.svg"
                  width={40}
                  height={40}
                  alt="localisation"
                />
            </a>

          </div>
        </div>

        <div className="footer_bottom">
          <p className="footer_copyright font-montserrat">Réalisé par Tendances.media</p>
          <p className="footer_copyright font-montserrat">©2024abcbusinesscenter</p>
          <p className="footer_copyright font-montserrat">Mentions Légales</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
