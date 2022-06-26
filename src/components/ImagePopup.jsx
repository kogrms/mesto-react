function ImagePopup() {

  return (
    <div className="popup_type_image popup">
      <div className="popup__container_type_image popup__container">
        <button type="button" className="popup__close_type_image popup__close" aria-label="Кнопка закрытия окна просмотра фотографии"></button>
        <img className="popup__photo" src="#" alt=""/>
        <h2 className="popup__caption">Название места</h2>
      </div>
    </div>
  );
}

export default ImagePopup;