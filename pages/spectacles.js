import React from 'react';
import { getAllSpectacles } from '../lib/api';
import SpectaclesList from '../components/SpectaclesList';

const Spectacle = ({ allSpectacles }) => {
  const spectacle = allSpectacles[0];
  console.log(spectacle);
  return (
    <SpectaclesList
    id={spectacle.id}
    slug={spectacle.slug}
    title={spectacle.title}
    toDate={spectacle.toDate}
    fromDate={spectacle.fromDate}
    image={spectacle.image}
    compositor={spectacle.compositor.name}
    category={spectacle.category.name}
    />
  );
};
export default Spectacle;

export async function getStaticProps({ preview }) {
  const allSpectacles = await getAllSpectacles(preview);
  return {
    props: { allSpectacles },
  };
};
