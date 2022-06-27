import React from 'react';
// import logo from './logo.svg';
import '../index.css';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditProfilePopupOpen, setEditPopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPopupState] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupState] = React.useState(false);

  function handleEditProfileClick() {
    setEditPopupState(true);
  }
  function handleAddPlaceClick() {
    setAddPopupState(true);
  }
  function handleEditAvatarClick() {
    setAvatarPopupState(true);
  }

  function closeAllPopups() {
    setEditPopupState(false);
    setAddPopupState(false);
    setAvatarPopupState(false);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main 
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
        />
        <Footer />
        <PopupWithForm 
          name='edit' 
          title='Редактировать профиль' 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
          name='add' 
          title='Новое место' 
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
          name='confirm' 
          title='Вы уверены?'
          >
          <button type="submit" className="form__submit-button" aria-label="Кнопка подтверждения удаления фото">
            Да
          </button>
        </PopupWithForm>
        <PopupWithForm 
          name='avatar' 
          title='Обновить аватар' 
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
            value=""
            placeholder="Ссылка на картинку"
          />
          <span id="avatar-link-error" className="form__input-error"></span>
          <button type="submit" className="form__submit-button" aria-label="Кнопка сохранения нового аватара">
            Сохранить
          </button>
        </PopupWithForm>
        <ImagePopup />



        {/* <div className="popup popup_type_edit">
          <div className="popup__container">
            <button type="button" className="popup__close" aria-label="Кнопка закрытия окна редактирования профиля"></button>
            <h2 className="popup__heading">Редактировать профиль</h2>
            <form className="form" name="edit-form" action="#" method="get" novalidate>
              <input
                id="name"
                type="text"
                name="name"
                className="form__input form__input_value_name"
                autocomplete="off"
                minlength="2"
                maxlength="40"
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
                autocomplete="off"
                minlength="2"
                maxlength="200"
                required
                value=""
                placeholder="О себе"
              />
              <span id="position-error" className="form__input-error"></span>
              <button type="submit" className="form__submit-button" aria-label="Кнопка сохранения изменений профиля">
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_add">
          <div className="popup__container">
            <button type="button" className="popup__close" aria-label="Кнопка закрытия окна добавления фотографии"></button>
            <h2 className="popup__heading">Новое место</h2>
            <form className="form" name="add-form" action="#" method="get">
              <input
                id="place"
                type="text"
                name="place"
                className="form__input form__input_value_place"
                autocomplete="off"
                minlength="2"
                maxlength="30"
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
                autocomplete="off"
                required
                value=""
                placeholder="Ссылка на картинку"
              />
              <span id="card-link-error" className="form__input-error"></span>
              <button type="submit" className="form__submit-button" aria-label="Кнопка сохранения новой фотографии">
                Создать</button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_confirm">
          <div className="popup__container">
            <button type="button" className="popup__close" aria-label="Кнопка закрытия окна подтверждения"></button>
            <h2 className="popup__heading">Вы уверены?</h2>
            <form className="form" name="confirm-form" action="#" method="get">
              <button type="submit" className="form__submit-button" aria-label="Кнопка подтверждения удаления фото">
                Да</button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <button type="button" className="popup__close" aria-label="Кнопка закрытия окна изменения аватара"></button>
            <h2 className="popup__heading">Обновить аватар</h2>
            <form className="form" name="avatar-form" action="#" method="get">
              <input
                id="avatar-link"
                type="url"
                name="link"
                className="form__input form__input_value_link"
                autocomplete="off"
                required
                value=""
                placeholder="Ссылка на картинку"
              />
              <span id="avatar-link-error" className="form__input-error"></span>
              <button type="submit" className="form__submit-button" aria-label="Кнопка сохранения нового аватара">
                Сохранить</button>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
