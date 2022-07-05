import React, { useState} from 'react';
import '../index.css';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditProfilePopupOpen, setEditPopupState] = useState(false);
  const [isAddPlacePopupOpen, setAddPopupState] = useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupState] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setEditPopupState(true);
  }
  function handleAddPlaceClick() {
    setAddPopupState(true);
  }
  function handleEditAvatarClick() {
    setAvatarPopupState(true);
  }
  function handleCardClick(card) {
    setSelectedCard({ 
      isOpen: true,
      ...card
    });
  }

  function closeAllPopups(e) {
    e.preventDefault();
    setEditPopupState(false);
    setAddPopupState(false);
    setAvatarPopupState(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main 
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
          onCardClick = {handleCardClick}
        />
        <Footer />
        <PopupWithForm 
          name = 'edit' 
          title = 'Редактировать профиль' 
          isOpen = {isEditProfilePopupOpen}
          onClose = {closeAllPopups}
          > 
          <input
            id="name"
            type="text"
            name="name"
            className="form__input form__input_value_name"
            autoComplete="off"
            minLength="2"
            maxLength="40"
            required
            value=""
            placeholder="Имя"
          />
          <span id="name-error" className="form__input-error"></span>
          <input
            id="position"
            type="text"
            name="position"
            className="form__input form__input_value_position"
            autoComplete="off"
            minLength="2"
            maxLength="200"
            required
            value=""
            placeholder="О себе"
          />
          <span id="position-error" className="form__input-error"></span>
          <button type="submit" className="form__submit-button" aria-label="Кнопка сохранения изменений профиля">
            Сохранить
          </button>
        </PopupWithForm>
        <PopupWithForm 
          name = 'add' 
          title = 'Новое место' 
          isOpen = {isAddPlacePopupOpen}
          onClose = {closeAllPopups}
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
            value=""
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
            value=""
            placeholder="Ссылка на картинку"
          />
          <span id="card-link-error" className="form__input-error"></span>
          <button type="submit" className="form__submit-button" aria-label="Кнопка сохранения новой фотографии">
            Создать
          </button>
        </PopupWithForm>
        <PopupWithForm 
          name = 'confirm' 
          title = 'Вы уверены?'
          >
          <button type="submit" className="form__submit-button" aria-label="Кнопка подтверждения удаления фото">
            Да
          </button>
        </PopupWithForm>
        <PopupWithForm 
          name = 'avatar' 
          title = 'Обновить аватар' 
          isOpen = {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
          >
          <input
            id="avatar-link"
            type="url"
            name="link"
            className="form__input form__input_value_link"
            autoComplete="off"
            required
            value=""
            placeholder="Ссылка на картинку"
          />
          <span id="avatar-link-error" className="form__input-error"></span>
          <button type="submit" className="form__submit-button" aria-label="Кнопка сохранения нового аватара">
            Сохранить
          </button>
        </PopupWithForm>
        <ImagePopup
          card = {selectedCard}
          onClose = {closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
