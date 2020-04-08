import Link from 'next/link';
import React from 'react';

const HomeArtists = ({
  slug,
  name,
  category,
  excerpt,
  // image,
  spectacle,
}) => (
  <div>
    <figure>
      <Link as={`/artists/${slug}`} href="/artists/[artist]">
        <a href="">
          {/* <img src="" alt="" /> */}
          <h2>{name}</h2>
          <h3>{category}</h3>
          <h3>{spectacle}</h3>
        </a>
      </Link>
    </figure>
  </div>
);

export default HomeArtists;
