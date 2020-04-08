import React from 'react';
import Link from 'next/link';

const ArtistsList = ({
  id,
  slug,
  name,
  category,
  // image,
}) => (
  <ul>
    <li>
      <Link as={`/artists/${slug}`} href="/artists/[artist]">
        <a href="">
        {/* <img src={image.basename} alt={image.alt} /> */}
        <span>{name}</span>
        <span>{category}</span>
        </a>
      </Link>
    </li>
  </ul>
);

export default ArtistsList;
