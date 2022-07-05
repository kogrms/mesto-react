function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button type="button" className="card__delete" aria-label="Кнопка удаления фотографии"></button>
      <img className="card__image" src={card.link} alt={card.title} onClick={handleCardClick} />
      <div className="card__info">
        <h3 className="card__heading">{card.title}</h3>
          <div className="card__likes-container">
            <button type="button" className="card__like" aria-label="Кнопка оценки фотографии"></button>
            <p className="card__likes-amount">{card.likes}</p>
          </div>
      </div>
    </li>
  );
}

export default Card