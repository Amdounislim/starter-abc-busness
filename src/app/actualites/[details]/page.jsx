import React from "react";
import Image from "next/image";
import CustomButton from "@/components/commons/Buttons/CustomButton";

const ArticleDetails = ({ params }) => {
  // This would typically come from an API or database based on params.details
  const article = {
    title: "NOM DE L'ARTICLE",
    mainImage: "/main_article_details.webp",
    content: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    bottomImages: ["/article_details_2.webp", "/article_details_1.webp"],
  };

  return (
    <div className="article-details-container gnPadding">
      <div className="article-details-content">
        {/* Title */}
        <h1 className="article-details-title text-orange">{article.title}</h1>

        {/* Main Image */}
        <div className="article-details-main-image">
          <Image
            src={article.mainImage}
            alt={article.title}
            fill
            className="article-image"
          />
        </div>

        {/* Content Paragraphs */}
        <div className="flexRowBetween">
          <div className="article-details-text w55">
            {article.content.map((paragraph, index) => (
              <div
                key={index}
                className="article-paragraph"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
          <div className="mb-5" style={{ alignSelf: "flex-end" }}>
            <CustomButton
              text="NOUS CONTACTER"
              callBack={""}
              fontSize="15px"
              fontStyle="italic"
            />
          </div>
        </div>

        {/* Bottom Images */}
        <div className="article-details-bottom-images">
          {article.bottomImages.map((image, index) => (
            <div
              key={index}
              className="article-bottom-image-wrapper"
              style={{ flex: index === 0 ? "1" : "2" }}
            >
              <Image
                src={image}
                alt={`Article image ${index + 1}`}
                fill
                className="article-bottom-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
