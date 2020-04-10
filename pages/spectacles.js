import React from 'react';
import { getAllSpectacles } from '../lib/api';

import Layout from '../components/layout';
import Container from '../components/container';
import SpectaclesList from '../components/SpectaclesList';

const Spectacles = ({ allSpectacles }) => {
  return (
    <Layout>
      <Container>
      <h2 className="title text-center">Représentations</h2>
      <ul className="md:flex md:flex-row md:justify-center md:w-full">
        {allSpectacles.map((spectacle) => (
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
        ))}
      </ul>
      </Container>
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
