// import logo from './logo.svg';
// import '../index.css';

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button type="button" className="profile__avatar-edit-button" aria-label="Кнопка изменения аватара"></button>
          <img className="profile__avatar" src="<%=require('./images/avatar_kusto.jpg')%>" alt="Аватар"/>
        </div>
        <div className="profile__info">
          <div className="profile__name-wrap">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button" aria-label="Кнопка редактирования профиля"></button>
          </div>
          <p className="profile__position">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-button" aria-label="Кнопка добавления фотографии"></button>
      </section>
      <section className="cards">
        <ul className="cards__container">
        </ul>
      </section>
    </main>
  );
}

export default Main;
