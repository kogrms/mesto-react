import React, { useState, useEffect, useContext } from "react";
import api from "../utils/api.js";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [cards, setCards] = useState([]);
  // const { avatar, name, about, _id } = useContext(CurrentUserContext);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        // console.log(cards);
        setCards(
          cards.map((item) => ({
            _id: item._id,
            link: item.link,
            name: item.name,
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
    <Card
      key={card._id}
      onCardClick={onCardClick}
      card={card}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}
    />
  ));

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card, e) {
    // setLoading(true);
    api
      .deleteCard(card._id)
      .then(setCards((state) => state.filter((c) => c._id !== card._id)))
      // .then(() => closeAllPopups(e))
      .catch((err) => console.log(err));
    // .finally(() => setLoading(false));
  }

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
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар"
          />
        </div>
        <div className="profile__info">
          <div className="profile__name-wrap">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__edit-button"
              aria-label="Кнопка редактирования профиля"
            ></button>
          </div>
          <p className="profile__position">{currentUser.about}</p>
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
