import React from 'react';
import styles from './Card.module.scss';

function Card({id, image, title, price, onPlus, onFavorite}) {

   const [isAdded, setIsAdded] = React.useState(false);
   const [isFavorite, setIsFavorite] = React.useState(false);

   const onClickAdd = () => {
      onPlus({id, image, title, price});
      setIsAdded(!isAdded);
   }

   const onClickFavorite = () => {
      onFavorite({id, image, title, price});
      setIsFavorite(!isFavorite);
   }

  return (
   <div className={styles.card}>
      <img width={18} height={18} className={styles.favorite} src={isFavorite ? "/img/liked.png" : "/img/unliked.png"} alt="unliked" onClick={onClickFavorite}/>
      <img width={133} height={112} src={image} alt={title}/>
      <p>{title}</p>
      <div className={styles.cardInfo}>
      <div className={styles.cardPrice}>
         <span>Price:</span>
         <b>{price} uah.</b>
      </div>
      <img width={22} height={22} src={isAdded ? "/img/accept.png" : "/img/plus.svg" } alt="Plus" onClick={onClickAdd} />
      </div>
   </div>
  )
}

export default Card;