import React from 'react'
import media1 from "../../assets/media 1.jpg"
import media2 from "../../assets/media 2.jpg"
import media3 from "../../assets/media 3.jpg"
import media4 from "../../assets/media 4.jpg"
import media5 from "../../assets/media 5.jpg"
import media6 from "../../assets/media 6.jpg"
import "./Media.css"
export const Media = () => {
  return (
    <div className='media'>
    <div className='row no-gutters'>
    <div className='col '>
    <div className='instgram'>
    <h3>Follow Us On Instagram</h3>
    <button><a href='http://preview.themeforest.net/item/organista-organic-shop-html-template/full_screen_preview/26473944?_ga=2.67994065.158646621.1670399336-1538608594.1668593750'>Follow Us</a></button>
    </div>
    </div> 
    <div className='col'>
    <a href='http://preview.themeforest.net/item/organista-organic-shop-html-template/full_screen_preview/26473944?_ga=2.67994065.158646621.1670399336-1538608594.1668593750' ><img src={media1} alt="media 1" /></a>
    <a href='http://preview.themeforest.net/item/organista-organic-shop-html-template/full_screen_preview/26473944?_ga=2.67994065.158646621.1670399336-1538608594.1668593750' ><img src={media4} alt="media 2" /></a>
    </div>
    <div className='col'>
    <a href='http://preview.themeforest.net/item/organista-organic-shop-html-template/full_screen_preview/26473944?_ga=2.67994065.158646621.1670399336-1538608594.1668593750' ><img src={media2} alt="media 3"  /></a>
    <a href='http://preview.themeforest.net/item/organista-organic-shop-html-template/full_screen_preview/26473944?_ga=2.67994065.158646621.1670399336-1538608594.1668593750' ><img src={media5} alt="media 4" /></a>
    </div>
    <div className='col'>
    <a href='http://preview.themeforest.net/item/organista-organic-shop-html-template/full_screen_preview/26473944?_ga=2.67994065.158646621.1670399336-1538608594.1668593750' ><img src={media3} alt="media 5"  /></a>
    <a href='http://preview.themeforest.net/item/organista-organic-shop-html-template/full_screen_preview/26473944?_ga=2.67994065.158646621.1670399336-1538608594.1668593750' ><img src={media6} alt="media 6"  /></a>
    </div>
    
    </div>
    </div>
  )
}
