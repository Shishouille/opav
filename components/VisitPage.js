import React from 'react';
import CoverImage from './cover-image';

const VisitPage = ({
  id,
  title,
  content,
  excerpt,
  location,
  image,
  price,
}) => (
  <div>
    <h2>{title}</h2>
    <div>
      <CoverImage
        title={title}
        responsiveImage={image.responsiveImage}
      />
    </div>
    <div>
      <h3>Adresse</h3>
      <p>{location.name}</p>
      <p>{location.department}</p>
      <p>{location.city}</p>
      <p>{location.adress}</p>
    </div>
    <div>
      <h3>Découvrez</h3>
      <p>{excerpt}</p>
    </div>
    <div>
      <h3>A propos</h3>
      <p>{content}</p>
    </div>
    <div>
      <h3>Prix</h3>
      <p>{price}</p>
    </div>
  </div>
);

export default VisitPage;
