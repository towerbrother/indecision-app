import React from "react";

const CreatedBy = ({ url, author }) => (
  <div className="container">
    <h5 className="createdBy__text">
      Created by{" "}
      <a
        className="createdBy__link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {author}
      </a>
    </h5>
  </div>
);

export default CreatedBy;
