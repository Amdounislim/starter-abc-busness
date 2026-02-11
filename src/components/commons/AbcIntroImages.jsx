import React from "react";
import Image from "next/image";

const AbcIntroImages = () => {
  return (
    <div className="abc-intro-images-container">
      <div className="abc-intro-left">
        <div class="image-wrapper">
          <Image
            src="/intro_image_1.webp"
            alt="ABC Business Center Exterior"
            width={540}
            height={390}
            className="abc-intro-image"
          />
          <div class="overlay-image"></div>
        </div>
      </div>
      <div className="abc-intro-right">
        <div class="image-wrapper">
          <Image
            src="/intro_image_2.webp"
            alt="ABC Business Center Office 1"
            width={150}
            height={195}
            className="abc-intro-image"
          />
          <div class="overlay-image"></div>
        </div>
        <div class="image-wrapper">
          <Image
            src="/intro_image_3.webp"
            alt="ABC Business Center Office 2"
            width={500}
            height={390}
            className="abc-intro-image"
          />
          <div class="overlay-image"></div>
        </div>
      </div>
    </div>
  );
};

export default AbcIntroImages;
