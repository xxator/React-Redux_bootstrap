import React,{useState} from "react";
import styles from "./Gallery.module.css";
import faker from 'faker';
import {ItemCard} from './../ItemCard/ItemCard';

// import im from './../../assets/items_images/1.jpg';


export const Gallery = props => {

    let temp = [];
    for(let i = 0; i <100; i++)
    {
        let tup = {
            id: i,
            name: faker.commerce.productName(),
            image: faker.image.avatar(),
            price: faker.commerce.price()
        }
        console.log(tup);
        temp.push(tup);
    }
    const [data,setdata] = useState(temp);
    const Cards = (
        data.map((item)=>{
            return(
            <ItemCard item={item}/>
            );
        })
    );

return <div className={styles.rootContainer}>{Cards}</div>;
};
