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

    <li className="flex justify-center items-center w-screen md:w-1/3 lg:w-1/2">
      <Link as={`/artists/${slug}`} href="/artists/[artist]">
        <a href="" className="w-full flex flex-col justify-center items-center">
        <h2 className="text-center">{name}</h2>
        <div className="w-full text-center">
        <CoverImage
            title={name}
            responsiveImage={image.responsiveImage}
        />
        <div className="bg-gray-100 m-0 p-0">
        <h2 className="text-center w-full">{category}</h2>
        </div>
        </div>
        </a>
      </Link>
    </li>
);

export default ArtistsList;
