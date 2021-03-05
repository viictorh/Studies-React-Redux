import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

//Já descontruido o props para a propriedade images
const ImageList = ({ images }) => {
  const imageItems = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{imageItems}</div>;
};

export default ImageList;
