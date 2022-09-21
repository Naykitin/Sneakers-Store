import React from 'react';
import ContentLoader from "react-content-loader";
import { AppContext } from '../../App';
import styles from './Card.module.scss';

function Card({id, number, image, title, price, onPlus, onFavorite,loading = false}) {

   const { isItemAdded } = React.useContext(AppContext);
   const { isItemFavorite } = React.useContext(AppContext);
   const { isFavorite } = React.useContext(AppContext);
   const { setIsFavorite } = React.useContext(AppContext);


   const onClickAdd = () => {
      onPlus({id, number, image, title, price});
   }

   const onClickFavorite = () => {
      onFavorite({id, number, image, title, price});
      setIsFavorite(!isFavorite);
   }

  return (
   <div className={styles.card}>
      {
         loading ? (
         <ContentLoader 
            speed={2}
            width={194}
            height={200}
            viewBox="0 0 194 200"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
         >
            <rect x="151" y="221" rx="0" ry="0" width="1" height="0" /> 
            <rect x="179" y="411" rx="0" ry="0" width="1" height="0" /> 
            <rect x="30" y="18" rx="0" ry="0" width="133" height="112" /> 
            <circle cx="20" cy="10" r="10" /> 
            <rect x="30" y="140" rx="0" ry="0" width="133" height="11" /> 
            <rect x="30" y="166" rx="0" ry="0" width="51" height="14" /> 
            <rect x="30" y="186" rx="0" ry="0" width="74" height="15" /> 
            <circle cx="140" cy="181" r="11" />
         </ContentLoader>) : (
         <>
            <img width={18} height={18} className={styles.favorite} src={isItemFavorite(number) ? "/img/liked.png" : "/img/unliked.png"} alt="unliked" onClick={onClickFavorite}/>
            <img width={133} height={112} src={image} alt={title}/>
            <p>{title}</p>
            <div className={styles.cardInfo}>
               <div className={styles.cardPrice}>
                  <span>Price:</span>
                  <b>{price} uah.</b>
               </div>
               <img width={22} height={22} src={isItemAdded(number) ? "/img/accept.png" : "/img/plus.svg" } alt="Plus" onClick={onClickAdd} />
            </div>
         </>
         )
      }
      
   </div>
  )
}

export default Card;