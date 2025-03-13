import React from "react";
import style from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={style.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image description"}
        onClick={() => onClick(image)} // Викликаємо onClick з image як аргумент
        className={style.image}
      />
    </div>
  );
};

export default ImageCard;
