import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleNewCardName(e) {
    setName(e.target.value);
  }

  function handleNewCardLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="place"
        type="text"
        name="place"
        className="form__input form__input_value_place"
        autoComplete="off"
        minLength="2"
        maxLength="30"
        required
        placeholder="Название"
        onChange={handleNewCardName}
        value={name}
      />
      <span id="place-error" className="form__input-error"></span>
      <input
        id="card-link"
        type="url"
        name="link"
        className="form__input form__input_value_link"
        autoComplete="off"
        required
        placeholder="Ссылка на картинку"
        onChange={handleNewCardLink}
        value={link}
      />
      <span id="card-link-error" className="form__input-error"></span>
      <button
        type="submit"
        className="form__submit-button"
        aria-label="Кнопка сохранения новой фотографии"
      >
        Создать
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
