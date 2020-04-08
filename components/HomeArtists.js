import Link from 'next/link';
import React from 'react';
import CoverImage from './cover-image';

const HomeArtists = ({
  slug,
  name,
  category,
  excerpt,
  image,
  spectacle,
}) => (
  <div>
    <figure className="md:w-full">
      <Link as={`/artists/${slug}`} href="/artists/[artist]">
        <a href="">
          <CoverImage
            title={name}
            responsiveImage={image.responsiveImage}
          />
          <h2 className="text-center">{name} - {category}</h2>
          <h3 className="text-center">{spectacle}</h3>
        </a>
      </Link>
    </figure>
  </div>
);

export default HomeArtists;
