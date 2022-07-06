function PopupWithForm({ name, title, isOpen, onClose, children }) {
  return (
    <div
      className={`popup popup_type_${name} ` + (isOpen ? "popup_opened" : ``)}
    >
      <div className="popup__container">
        <button
          onClick={onClose}
          type="button"
          className="popup__close"
          aria-label="Кнопка закрытия попапа"
        ></button>
        <h2 className="popup__heading">{title}</h2>
        <form
          className="form"
          name={`${name}-form`}
          action="#"
          method="get"
          noValidate
        >
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
