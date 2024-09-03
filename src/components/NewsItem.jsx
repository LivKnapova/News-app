import React from "react";
import dateFormat from 'dateformat';

function NewsItem({ item }) {
  const websiteUrl = item.url;
  const website = websiteUrl.split("https://").pop().split("/")[0];

  const date = item.published_at;
  const formatDate = date.split("T")[0];
  const publishedDate = dateFormat(formatDate, "mmmm dS, yyyy");

  return (
    <a href={item.url} className="article">
      <div className="article-image">
        <img src={item.image_url} atl="" />
      </div>
      <div className="article-content">
        <div className="article-source">
          <img
            src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`}
            atl=""
          />
          <span>{item.source}</span>
        </div>
        <div className="article-title">
          <h2>{item.title}</h2>
        </div>
        <p className="article-description">{item.description}</p>
        <div className="article-details">
          <small>
            <b>Published at: </b>
            {publishedDate}
          </small>
        </div>
      </div>
    </a>
  );
}

export default NewsItem;
