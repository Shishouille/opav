import React, { useState } from 'react';

import Layout from '../components/layout';
import VisitPage from '../components/VisitPage';

import { getAllVisits } from '../lib/api';

const Spectacles = ({ allVisits }) => {
  const [opera, changeOpera] = useState(false);
  const bastille = allVisits[0];
  const garnier = allVisits[1];
  return (
    <Layout>
      <h2 className="title text-center">Venez Visiter !</h2>
      <div className="flex justify-around w-screen my-5">
      <button type="button" className="mx-2 text-xl md:text-3xl border-b-2 border-red-800" onClick={() => changeOpera(true)}>Palais Garnier</button>
      <button type="button" className="mx-2 text-xl md:text-3xl border-b-2 border-red-800" onClick={() => changeOpera(false)}>Opéra Bastille</button>
      </div>
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
