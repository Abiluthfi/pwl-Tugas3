// components/NewsCarousel.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Content.css";

const NewsCarousel = () => {
  const [randomNews, setRandomNews] = useState([]);

  useEffect(() => {
    const fetchRandomNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=2d5bb9305baf463a945891446e5f62c7");

        setRandomNews(response.data.articles.slice(0, 3));
      } catch (error) {
        console.error("Error fetching random news:", error);
      }
    };

    fetchRandomNews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="NewsUpdate">
      <Slider {...settings}>
        {randomNews.map((news, index) => (
          <div key={index}>
            <div>
              <h2>{news.title}</h2>
              <p>{news.description}</p>
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                Baca selengkapnya
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
