import React from 'react'
import DealsData from '../../Data/DealsData'
import "./Deals.css"
export const Deals = () => {
  return (
    <div className='deals'>
    <div className='container'>
    <h4>Daily Deals</h4>
    <div className='row'>
   

  {DealsData.map(items=>{
return(
    <div className='col-lg-4 col-md-12'>
    <div className='deals-box' key={items.id}>
    <img src={items.image} alt={items.alt}/>
    <h5><a href='http://preview.themeforest.net/item/organista-organic-shop-html-template/full_screen_preview/26473944?_ga=2.67994065.158646621.1670399336-1538608594.1668593750'>{items.title}</a></h5>
     <p>{items.text}</p>
   <span className='new'>{items.price}</span>
   <span className='old'>{items.oldPrice}</span>

    <button><a href='http://preview.themeforest.net/item/organista-organic-shop-html-template/full_screen_preview/26473944?_ga=2.67994065.158646621.1670399336-1538608594.1668593750'>Buy Now</a></button>
    </div>
        </div>
)
  })}

    </div>
 
  

    </div>
    </div>
  )
}
