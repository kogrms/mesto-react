// import logo from './logo.svg';
import '../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <div className="popup popup_type_edit">
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
        <div className="popup_type_image popup">
          <div className="popup__container_type_image popup__container">
            <button type="button" className="popup__close_type_image popup__close" aria-label="Кнопка закрытия окна просмотра фотографии"></button>
            <img className="popup__photo" src="#" alt=""/>
            <h2 className="popup__caption">Название места</h2>
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
        </div>
      </div>
    </div>
  );
}

export default App;
