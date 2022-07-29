import React, { useState, useEffect, useContext } from "react";
import api from "../utils/api.js";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [cards, setCards] = useState([]);
  const { avatar, name, about } = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        // console.log(cards);
        setCards(
          cards.map((item) => ({
            id: item._id,
            link: item.link,
            title: item.name,
            likes: item.likes,
            owner: item.owner,
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
          <img className="profile__avatar" src={avatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__name-wrap">
            <h1 className="profile__name">{name}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__edit-button"
              aria-label="Кнопка редактирования профиля"
            ></button>
          </div>
          <p className="profile__position">{about}</p>
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
