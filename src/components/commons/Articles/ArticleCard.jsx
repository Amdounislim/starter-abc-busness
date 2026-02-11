import React from "react";
import Image from "next/image";

const ArticleCard = ({ title, imageSrc, link }) => {
  return (
    <div className="article-card">
      <div className="article-card-image-wrapper">
        <Image src={imageSrc} alt={title} fill className="article-card-image" />
      </div>
      <div className="article-card-footer">
        <h3 className="article-card-title">{title}</h3>
        <Image
          src="/Vector.svg"
          alt="arrow"
          width={26.66}
          height={12}
          className="article-card-arrow"
        />
      </div>
    </div>
  );
};

export default ArticleCard;
