import React, { useState } from "react";
import style from "./ImageCard.module.css";
import ImageModal from "../ImageModal/ImageModal";

const ImageCard = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={style.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image description"}
        onClick={openModal}
        className={style.image}
      />
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={image}
      />
    </div>
  );
};

export default ImageCard;
