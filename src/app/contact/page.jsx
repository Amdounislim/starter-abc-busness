import React from "react";
import ContactSection from "@/components/commons/ContactSection";

const Contact = () => {
  return (
    <main>
      <ContactSection
        image_url="/contact.webp"
        phoneNumber="+377 99 99 63 20"
        phoneText="Une Question ? Appelez-Nous 24/24"
      />
    </main>
  );
};

export default Contact;
