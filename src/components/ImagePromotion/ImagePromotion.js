import React, { useEffect, useState } from 'react';
import ImagePromo from '../../images/ImagePromotion.webp';
import ImagePromoSmall from '../../images/ImagePromotionSmall.webp';

function ImagePromotion() {
  const [image, setImage] = useState();

  useEffect(() => {
    function changeImage() {
      if (window.innerWidth > 960) {
        setImage(ImagePromo);
      } else {
        setImage(ImagePromoSmall);
      }
    }

    changeImage();

    window.addEventListener('resize', changeImage);

    return () => {
      window.removeEventListener('resize', changeImage);
    };
  }, []);

  return <img src={image} className="image-promotion" />;
}

export default ImagePromotion;
