function PopupWithForm(props) {
  const [isOpen, onEditProfile] = React.useState(false);

  function onEditProfile() {
    isOpen = !isOpen;
  }

  return (
    <div className={`popup popup_type_${props.name}` + (isOpen? `popup_opened` : '')}>
      <div className="popup__container">
        <button type="button" className="popup__close" aria-label="Кнопка закрытия попапа"></button>
        <h2 className="popup__heading">{props.title}</h2>
        <form className="form" name={`${props.name}-form`} action="#" method="get" novalidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
