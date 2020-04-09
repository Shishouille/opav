import React, { useState } from 'react';

import Layout from '../components/layout';
import VisitPage from '../components/VisitPage';

import { getAllVisits } from '../lib/api';

const Spectacles = ({ allVisits }) => {
  console.log(allVisits);
  const [opera, changeOpera] = useState(false);
  const bastille = allVisits[0];
  const garnier = allVisits[1];
  return (
    <Layout>
      <h2 className="title text-center">Venez Visiter !</h2>
      <button type="button" onClick={() => changeOpera(true)}>Palais Garnier</button>
      <button type="button" onClick={() => changeOpera(false)}>Opéra Bastille</button>
      {opera && (
      <VisitPage
        id={garnier.id}
        title={garnier.title}
        content={garnier.content}
        excerpt={garnier.excerpt}
        location={garnier.location}
        image={garnier.image}
        price={garnier.price}
      />
      )}
      {!opera && (
        <VisitPage
          id={bastille.id}
          title={bastille.title}
          content={bastille.content}
          excerpt={garnier.excerpt}
          location={bastille.location}
          image={bastille.image}
          price={bastille.price}
        />
      )}
    </Layout>
  );
};
export default Spectacles;

export async function getStaticProps({ preview }) {
  const allVisits = await getAllVisits(preview);
  return {
    props: { allVisits },
  };
}
