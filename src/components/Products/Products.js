import React from 'react'
import imageOne from "../../assets/1.jpg"
import imageTwo from "../../assets/2.jpg"
import "./Products.css"
export const Products = () => {
  return (
    <div className='products'>
    <div className='container'>
    <h4>Our products</h4>
    <div className='row'>
    <div className='col'>
    <img src={imageOne} alt=''/>
    
    </div>
    <div className='col'>
    
    <img src={imageTwo} alt=''/>
    
    </div>
    
    
    </div>
    
    
    </div>
    
    
    </div>
  )
}
