import React, { useState, useEffect } from "react";
import api from "../utils/api.js";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, cards]) => {
        setUserAvatar(data.avatar);
        setUserName(data.name);
        setUserDescription(data.about);
        setCards(
          cards.map((item) => ({
            id: item._id,
            link: item.link,
            title: item.name,
            likes: item.likes.length,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cardsElements = cards.map((card) => (
    <Card key={card.id} onCardClick={onCardClick} card={card} />
  ));

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            onClick={onEditAvatar}
            type="button"
            className="profile__avatar-edit-button"
            aria-label="Кнопка изменения аватара"
          ></button>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__name-wrap">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__edit-button"
              aria-label="Кнопка редактирования профиля"
            ></button>
          </div>
          <p className="profile__position">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
          aria-label="Кнопка добавления фотографии"
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__container">{cardsElements}</ul>
      </section>
    </main>
  );
}

export default Main;
