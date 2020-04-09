import React from 'react';
import CoverImage from './cover-image';

const SubscriptionPage = ({
  id,
  name,
  content,
  excerpt,
  image,
  price,
}) => (
  <div>
    <h2>{name}</h2>
    <div>
      <CoverImage
        title={name}
        responsiveImage={image.responsiveImage}
      />
    </div>
    <div>
      <h3>Dans Votre Abonnement</h3>
      <p>{excerpt}</p>
      <p>{content}</p>
    </div>
    <div>
      <h3>Prix</h3>
      <p>{price}</p>
    </div>
  </div>
);

export default SubscriptionPage;
