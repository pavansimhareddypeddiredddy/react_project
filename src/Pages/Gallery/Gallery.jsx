import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoItems } from '../../Components/PhotoPage/Photos';
import '../../Components/Styles/gallery.scss';

function Gallery() {
  return (
    <div className="photo-gallery">
      {PhotoItems.map((item) => (
        <div className="photo-gallery-item" key={item.photo_id}>
          <img src={item.imgSrc} alt="" />
          <div className="details">
            <h3>{item.type}</h3>
            <h1>{item.title}</h1>
            <Link to={`/gallery/${item.photo_id}`} item={item}>
              <button>View Image</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
