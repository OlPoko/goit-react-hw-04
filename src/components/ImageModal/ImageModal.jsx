import style from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onRequestClose();
    }
  };

  return (
    <div className={style.overlay} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <button onClick={onRequestClose} className={style.closeBtn}>
          &times;
        </button>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={style.modalImage}
        />
      </div>
    </div>
  );
};

export default ImageModal;
