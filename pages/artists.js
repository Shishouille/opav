import React from 'react';
import { getAllArtists } from '../lib/api';

import Layout from '../components/layout';
import ArtistsList from '../components/ArtistsList';


const Artists = ({ allArtists }) => {
  const artist = allArtists[0];
  console.log(allArtists);
  return (
    <Layout>
    <ul className="flex flex-col justify-center md:justify-around md:flex-row ">
      {allArtists.map((artist) => (
        <ArtistsList
          key={artist.id}
          slug={artist.slug}
          name={artist.name}
          category={artist.category.name}
          image={artist.image}
        />      
      ))}
    </ul>
    </Layout>
  );
};
export default Artists;

export async function getStaticProps({ preview }) {
  const allArtists = await getAllArtists(preview);
  return {
    props: { allArtists },
  };
};
