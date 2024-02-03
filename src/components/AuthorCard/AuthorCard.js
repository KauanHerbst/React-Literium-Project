import React from 'react';
import ImagePeopleOne from '../../images/Image-people-1.webp';

function AuthorCard({ children, name, img }) {
  return (
    <div className="container-author flex-start flex-column text-center mg-2">
      <div className="container-author-img">
        <img src={img} />
      </div>
      <div className="mt-2">
        <h5>{name}</h5>
      </div>
    </div>
  );
}

export default AuthorCard;
