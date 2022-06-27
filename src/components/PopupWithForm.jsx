function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} ` + (props.isOpen ? 'popup_opened' : ``)}>
      <div className="popup__container">
        <button onClick={props.onClose} type="button" className="popup__close" aria-label="Кнопка закрытия попапа"></button>
        <h2 className="popup__heading">{props.title}</h2>
        <form className="form" name={`${props.name}-form`} action="#" method="get" noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
