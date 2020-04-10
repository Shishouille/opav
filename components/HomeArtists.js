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
  <div>
      <h2 className="title text-center my-5">Dernier artiste ajouté</h2>
      <Link as={`/artists/${slug}`} href="/artists/[artist]">
        <a href="">
          <div className="text-center">
            <CoverImage
              title={name}
              responsiveImage={image.responsiveImage}
            />
              <h2 className="text-xl font-bold border-t-2 p-3 border-black w-full md:w-1/2 m-auto">{name}</h2>
          </div>

        </a>
      </Link>
    </div>
    <div className="artist-bg">
      <div className="hd-display hd-bubble">
        <div className="text-bubble hd-text-bubble">
          <h2 className="title text-center my-5">Artistes</h2>
          <Link href="/artists"><a className="hd-link">Découvrir</a></Link>
          <div className="artist-portrait" />
        </div>
      </div>
    </div>
  </div>
);

export default HomeArtists;
