"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ArticleCard = ({ id, title, imageSrc, link }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/actualites/${id}`);
  };

  return (
    <div className="article-card" onClick={handleClick}>
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
