import React from 'react';
import Link from 'next/link';
import CoverImage from './cover-image';

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
      <h1 className="title text-center">{name}</h1>
    </div>
    <div className="flex flex-col justify-center md:flex-row">
    <div className="md:w-1/2">
      <h2 className="text-center bg-gray-100">{category}</h2>
      <h3>{excerpt}</h3>
      <div className="text-center">
      <CoverImage
          title={name}
          responsiveImage={image.responsiveImage}
        />
      </div>
      <p>{credits}</p>
    </div>
    <div className="md:w-1/2">
      <h3 className="title">A propos </h3>
      <p>{content}</p>
    </div>
    </div>
    <div>
      <h3 className="title">A retrouver dans</h3>
      <Link as={`/spectacles/${spectacle.slug}`} href="/spectacles/[spectacle]">
        {spectacle.title}
      </Link>
    </div>
  </main>
);

export default ArtistPage;
