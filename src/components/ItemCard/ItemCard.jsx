import React,{useState} from "react";
import styles from "./ItemCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from './../../actions/addItemToCart';
import { deleteItemFromCart } from './../../actions/deleteItemfromCart';
import { updateCost } from './../../actions/updateCost';

export const ItemCard = props => {


  const [inCart,setInCart] = useState(false);

  const handleAddItem = function(){
    setInCart(true);  
    dispatch(addToCart(props.item));
    dispatch(updateCost(Number(props.item.price)));
  }

  const handleRemoveItem = function(){
    setInCart(false);  
    dispatch(deleteItemFromCart(props.item));
    dispatch(updateCost(-1*Number(props.item.price)));
  }

  const Add = (
      <div onClick={handleAddItem} className={styles.addButton}>Add to cart</div>
  );


  const Remove = (
    <div onClick={handleRemoveItem} className={styles.removeButton}>Remove</div>
    );

  let but = null; 
  if(inCart === false) but = Add;
  else but = Remove;

  const dispatch = useDispatch();

  return (
    <div className={styles.rootContainer}>
      <img className={styles.itemImage} src={props.item.image} alt='some'></img>
      <div className={styles.itemName}>{props.item.name}</div>
      <div className={styles.priceAndAddContainer}>
        <div className={styles.price}>
          &#x20b9;
          <div className={styles.priceStyle}>{props.item.price}</div>
        </div>
        {but}
      </div>
    </div>
  );
};

