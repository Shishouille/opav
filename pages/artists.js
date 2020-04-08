import React from 'react';
import { getAllArtists } from '../lib/api';
import ArtistsList from '../components/ArtistsList';

const Artists = ({ allArtists }) => {
  const artist = allArtists[0];
  console.log(allArtists);
  return (
    <ArtistsList
    id={artist.id}
    slug={artist.slug}
    name={artist.name}
    category={artist.category.name}
    image={artist.image}
    />
  );
};
export default Artists;

export async function getStaticProps({ preview }) {
  const allArtists = await getAllArtists(preview);
  return {
    props: { allArtists },
  };
};
