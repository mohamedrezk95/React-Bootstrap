import React from "react";
import GalleryData from "../../Data/GalleryData";
import { Product } from "./Product";

export const Gallery = () => {
  const fetchData = GalleryData.map((item) => {
    return (
      <Product
        id={item.id}
        title={item.title}
        image={item.image}
        alt={item.alt}
        text={item.text}
        price={item.price}
      />
    );
  });
  return (
    <div className="gallerybox">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2>Gallery</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 ">{fetchData}</div>
        </div>
      </div>
    </div>
  );
};
