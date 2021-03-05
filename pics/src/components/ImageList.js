import React from "react";

//Já descontruido o props para a propriedade images
const ImageList = ({ images }) => {
  //desconstruido description, id e url do parametro enviado ao map
  const imageItems = images.map(({ description, id, urls }) => (
    <img key={id} alt={description} src={urls.regular} />
  ));
  return <div>{imageItems}</div>;
};

export default ImageList;
