import React from 'react';
import Link from 'next/link';

const ArtistPage = ({
  id,
  slug,
  name,
  excerpt,
  category,
  content,
  image,
  credits,
  spectacle
}) => (
  <main>
    <div>
      <h1>{name}</h1>
      <h2>{category}</h2>
      <h3>{excerpt}</h3>
    </div>
    <div>
      {/* <img src="" alt="" /> */}
      <p>{credits}</p>
    </div>
    <div>
      <p>{content}</p>
    </div>
    <div>
      <h3>A retrouver dans</h3>
      <Link as={`/spectacles/${spectacle.slug}`} href="/spectacles/[spectacle]">
        {spectacle.title}
      </Link>
    </div>
  </main>
);

export default ArtistPage;
