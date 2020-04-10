import React from 'react';
import CoverImage from './cover-image';
import Container from './container';

const SubscriptionPage = ({
  id,
  name,
  content,
  excerpt,
  image,
  price,
}) => (
  <main>
    <Container>
      <div>
        <h2 className="artist-title title my-5">{name}</h2>
      </div>
      <div className="flex flex-col justify-center md:flex-row mb-4">
        <div className="md:w-1/2 md:pr-5 md:border-r-4 border-black">
          <div className="text-center">
            <CoverImage
              title={name}
              responsiveImage={image.responsiveImage}
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-5">
          <h3 className="artist-subtitle title">Dans Votre Abonnement</h3>
          <p>{excerpt}</p>
          <p>{content}</p>
          <div className="mt-2">
            <h3 className="artist-subtitle title">Prix</h3>
            <p className="artist-sp hd-link">{price} €</p>
          </div>
        </div>
      </div>
    </Container>
  </main>
);

export default SubscriptionPage;
