function PopupWithForm() {
  
  return (
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
  );
}

export default PopupWithForm;
