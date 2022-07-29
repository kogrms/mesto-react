import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  // console.log(currentUser);
  const isOwn = card.owner._id === currentUser._id;
  // console.log(card.owner);
  const cardDeleteButtonClassName = `card__delete ${
    isOwn ? "" : "card__delete_hidden"
  }`;
  // console.log(card.likes);
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like ${
    isLiked ? "card__like_active" : ""
  }`;

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        aria-label="Кнопка удаления фотографии"
      ></button>
      <img
        className="card__image"
        src={card.link}
        alt={card.title}
        onClick={handleCardClick}
      />
      <div className="card__info">
        <h3 className="card__heading">{card.title}</h3>
        <div className="card__likes-container">
          <button
            type="button"
            className={cardLikeButtonClassName}
            aria-label="Кнопка оценки фотографии"
          ></button>
          <p className="card__likes-amount">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
