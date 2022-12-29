import React from 'react'
import NewsData from '../../Data/NewsData'
import "./News.css"
export const News = () => {
  return (
    <div className='new'>
    <div className='container'>
    <h4>Top Picks</h4>
    <div className='row'>
   

  {NewsData.map(items=>{
return(
    <div className='col-lg-3 col-md-12'>
    <div className='cont' key={items.id}>
    <img src={items.photo} alt={items.alt}/>
    <a className='title' href='https://androthemes.com/themes/html/organista/product-single.html'>{items.link}</a>
    <span>{items.price}</span>
    <button><a href='http://preview.themeforest.net/item/organista-organic-shop-html-template/full_screen_preview/26473944?_ga=2.67994065.158646621.1670399336-1538608594.1668593750'>ADD TO CART</a></button>
    </div>
        </div>
)
  })}

    </div>
 
  

    </div>
    </div>
  )
}
