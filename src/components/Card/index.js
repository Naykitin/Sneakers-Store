import styles from './Card.module.scss';

function Card(props) {

   const onClickButton = (id) => {
      alert(`ID: ${id}`)
   }

  return (
   <div className={styles.card}>
      <img width={18} height={18} className={styles.favorite} src="/img/unliked.png" alt="unliked"/>
      <img width={133} height={112} src={props.image} alt={props.title}/>
      <p>{props.title}</p>
      <div className={styles.cardInfo}>
      <div className={styles.cardPrice}>
         <span>Price:</span>
         <b>{props.price} uah.</b>
      </div>
      <img width={22} height={22} src="/img/plus.svg" alt="Plus" onClick={() => onClickButton(props.id)} />
      </div>
   </div>
  )
}

export default Card;