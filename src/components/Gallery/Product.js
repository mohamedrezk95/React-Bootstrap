import React from 'react'
import  "./product.css"
export const Product = (props) => {
  return (
    <div className='box' key={props.key}>
    <h2>{props.title}</h2>
    <p>{props.text}</p>
    <img src={props.image} alt={props.alt}/>
    <span>{props.price}</span>
    <button>
    <a href='https://androthemes.com/themes/html/organista/product-single.html'>Buy Now</a></button>
    </div>
  )
}
