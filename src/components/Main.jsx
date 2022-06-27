// import logo from './logo.svg';
// import '../index.css';
import avatarPath from '../images/avatar_kusto.jpg';

function Main(props) {
  
  // const handleEditAvatarClick = () => {
  //   document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  // };
  // const handleEditProfileClick = () => {
  //   document.querySelector('.popup_type_edit').classList.add('popup_opened');
  // };
  // const handleAddPlaceClick = () => {
  //   document.querySelector('.popup_type_add').classList.add('popup_opened');
  // }
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button onClick={props.onEditAvatar} type="button" className="profile__avatar-edit-button" aria-label="Кнопка изменения аватара"></button>
          <img className="profile__avatar" src={avatarPath} alt="Аватар"/>
        </div>
        <div className="profile__info">
          <div className="profile__name-wrap">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button" aria-label="Кнопка редактирования профиля"></button>
          </div>
          <p className="profile__position">Исследователь океана</p>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button" aria-label="Кнопка добавления фотографии"></button>
      </section>
      <section className="cards">
        <ul className="cards__container">
        </ul>
      </section>
    </main>
  );
}

export default Main;
