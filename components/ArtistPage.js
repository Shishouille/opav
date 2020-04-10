import React from 'react';
import Link from 'next/link';
import CoverImage from './cover-image';
import Container from './container';

const ArtistPage = ({
  id,
  slug,
  name,
  excerpt,
  category,
  content,
  image,
  credits,
  spectacle,
}) => (
  <main>
    <Container>
      <div>
        <h2 className="artist-title title">{name}</h2>
      </div>
      <div className="flex flex-col justify-center md:flex-row mb-4">
        <div className="md:w-1/2 md:pr-5 md:border-r-4 border-black">
          <h2 className="text-center italic">{category}</h2>
          <h3 className="text-center mb-5">{excerpt}</h3>
          <div className="text-center">
            <CoverImage
              title={name}
              responsiveImage={image.responsiveImage}
            />
          </div>
          <p className="text-center">{credits}</p>
        </div>
        <div className="md:w-1/2 md:pl-5">
          <h3 className="artist-subtitle title">A propos </h3>
          <p>{content}</p>
        </div>
      </div>
      <div>
        <h3 className="artist-subtitle title">A retrouver dans</h3>
        <Link as={`/spectacles/${spectacle.slug}`} href="/spectacles/[spectacle]">
          <a className="artist-sp hd-link">{spectacle.title}</a>
        </Link>
      </div>
    </Container>
  </main>
);

export default ArtistPage;
