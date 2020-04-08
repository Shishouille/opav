import React from 'react';
import { getAllSpectacles } from '../lib/api';

import Layout from '../components/layout';
import SpectaclesList from '../components/SpectaclesList';

const Spectacles = ({ allSpectacles }) => {
  const spectacle = allSpectacles[0];
  console.log(spectacle);
  return (
    <Layout>
      <h1 className="title text-center">Représentations</h1>
      <ul>
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
      </ul>
    </Layout>
  );
};
export default Spectacles;

export async function getStaticProps({ preview }) {
  const allSpectacles = await getAllSpectacles(preview);
  return {
    props: { allSpectacles },
  };
}
