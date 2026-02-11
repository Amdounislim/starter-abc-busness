"use client";
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Image from "next/image";

const ArticlesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [refrechList, setRefrechList] = useState(false);
  const articlesPerPage = 6;

  // Sample data - replace with your actual data
  const articles = [
    {
      id: 1,
      title: "Nom de l'article",
      imageSrc: "/article_1.webp",
      link: "/actualites/1",
    },
    {
      id: 2,
      title: "Nom de l'article",
      imageSrc: "/article_2.webp",
      link: "/actualites/2",
    },
    {
      id: 3,
      title: "Nom de l'article",
      imageSrc: "/article_3.webp",
      link: "/actualites/3",
    },
    {
      id: 4,
      title: "Nom de l'article",
      imageSrc: "/article_4.webp",
      link: "/actualites/4",
    },
    {
      id: 5,
      title: "Nom de l'article",
      imageSrc: "/article_5.webp",
      link: "/actualites/5",
    },
    {
      id: 6,
      title: "Nom de l'article",
      imageSrc: "/article_6.webp",
      link: "/actualites/6",
    },
    {
      id: 7,
      title: "Nom de l'article",
      imageSrc: "/article_1.webp",
      link: "/actualites/7",
    },
    {
      id: 8,
      title: "Nom de l'article",
      imageSrc: "/article_2.webp",
      link: "/actualites/8",
    },
    {
      id: 9,
      title: "Nom de l'article",
      imageSrc: "/article_3.webp",
      link: "/actualites/9",
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Scroll to top when page changes
  useEffect(() => {
    if (typeof window !== "undefined" && refrechList) {
      window.scrollTo({ top: 500, behavior: "smooth" });
    }
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setRefrechList(true);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setRefrechList(true);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setRefrechList(true);
    }
  };

  return (
    <div className="articles-list-container">
      <div className="articles-list">
        {currentArticles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            imageSrc={article.imageSrc}
            link={article.link}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-arrow"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <Image
              src="/Vector_Previous.svg"
              alt="previous"
              width={26.66}
              height={12}
            />
          </button>

          <div className="pagination-numbers">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`pagination-number ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className="pagination-arrow"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <Image
              src="/Vector_Next.svg"
              alt="next"
              width={26.66}
              height={12}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticlesList;
