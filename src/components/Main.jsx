import React, { useState, useEffect } from 'react';
import avatarPath from '../images/avatar_kusto.jpg';
import api from '../utils/api.js';

function Main(props) {
  
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  
    // Promise.all([api.getUserInfo(), api.getInitialCard()])
  // .then(([data, cards]) => {
  //   // console.log(data);
  //   userInfo.setUserAvatar(data.avatar);
  //   userInfo.setUserInfo(data.name, data.about);
  //   cardList.renderItems(cards.reverse());
  // })
  // .catch(err => {
  //   console.log(err);
  // });

  useEffect(() => {
    // function handleMouseMove(event) {
    //   setPosition({
    //     top: event.pageY,
    //     left: event.pageX,
    //   });
    // }

        // Список действий внутри одного хука
    // document.addEventListener('mousemove', handleMouseMove);
    // document.body.classList.add('no-cursor');

        // Возвращаем функцию, которая удаляет эффекты
    // return () => {
    //   document.body.classList.remove('no-cursor');
    //   document.removeEventListener('mousemove', handleMouseMove);
    // };


    api.getUserInfo()
    .then((data) => {
      console.log(data);
      setUserAvatar(data.avatar);
      setUserName(data.name);
      setUserDescription(data.about);
    })
    .catch(err => {
      console.log(err);
    });

    // setUserAvatar = (data) => {
    //   avatarPath = data.avatar;
    // };
    // avatarPath = userAvatar;

  });
  

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button onClick={props.onEditAvatar} type="button" className="profile__avatar-edit-button" aria-label="Кнопка изменения аватара"></button>
          <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
        </div>
        <div className="profile__info">
          <div className="profile__name-wrap">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button" aria-label="Кнопка редактирования профиля"></button>
          </div>
          <p className="profile__position">{userDescription}</p>
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
