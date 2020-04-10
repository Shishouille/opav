import React from 'react';
import Link from 'next/link';

import CoverImage from './cover-image';

const ArtistsList = ({
  id,
  slug,
  name,
  category,
  image,
}) => (
  <li className=" artist-display md:w-1/3">
    <div className="artist-category">
      <h2>{name}</h2>
    </div>
    <div className="artist-portrait">
      <Link as={`/artists/${slug}`} href="/artists/[artist]">
        <a href="">
          <CoverImage
            title={name}
            responsiveImage={image.responsiveImage}
          />
          <h2 className="text-center">{category}</h2>
        </a>
      </Link>
    </div>
  </li>
);

export default ArtistsList;
