import React, { useState, useEffect } from "react";
import "../index.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/api.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err));
    // api
    //   .getInitialCard()
    //   .then((cards) => setCards(cards))
    //   .catch((err) => console.log(err));
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      ...card,
    });
  }

  function handleUpdateUser(newUserData) {
    api
      .setUserInfo(newUserData)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
    // .finally(() => setLoading(false));
    // console.log(newUserData);
    // console.log(currentUser);
  }

  function closeAllPopups() {
    // e.preventDefault();
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            name="add"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
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
          <PopupWithForm name="confirm" title="Вы уверены?">
            <button
              type="submit"
              className="form__submit-button"
              aria-label="Кнопка подтверждения удаления фото"
            >
              Да
            </button>
          </PopupWithForm>
          <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input
              id="avatar-link"
              type="url"
              name="link"
              className="form__input form__input_value_link"
              autoComplete="off"
              required
              placeholder="Ссылка на картинку"
            />
            <span id="avatar-link-error" className="form__input-error"></span>
            <button
              type="submit"
              className="form__submit-button"
              aria-label="Кнопка сохранения нового аватара"
            >
              Сохранить
            </button>
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
