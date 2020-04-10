import React from 'react';
import CoverImage from './cover-image';
import Container from './container';

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
    <h2 className="title">{title}</h2>
    <div>
      <CoverImage
        title={title}
        responsiveImage={image.responsiveImage}
      />
    </div>
    <Container>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mt-3">
          <div className="leading-4">
            <h3 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Adresse</h3>
            <p className="text-sm">{location.name}</p>
            <p className="text-sm">{location.department}</p>
            <p className="text-sm">{location.city}</p>
            <p className="text-sm">{location.adress}</p>
          </div>
          <div className="leading-4">
            <h3 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Prix</h3>
            <p>{price} €</p>
          </div>
        </div>
        <div className="md:w-3/4">
          <h3 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Découvrez</h3>
          <p>{excerpt}</p>
          <h3 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">A propos</h3>
          <p>{content}</p>
        </div>
      </div>
    </Container>
  </div>
);

export default VisitPage;
