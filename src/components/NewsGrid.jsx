import React from "react";
import NewsItem from "./NewsItem";

function NewsGrid({ items }) {
  return (
    <div className="news-grid">
      {items.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </div>
  );
}

export default NewsGrid;
