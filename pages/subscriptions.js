import React, { useState } from 'react';

import Layout from '../components/layout';

import SubscriptionPage from '../components/SubscriptionPage';
import { getAllSubscriptions } from '../lib/api';

const Spectacles = ({ allSubscriptions }) => {
  console.log(allSubscriptions);
  return (
    <Layout>
      <h2 className="title text-center">Nos Abonnements</h2>
      {allSubscriptions.map((subscription) => (
        <SubscriptionPage
          id={subscription.id}
          price={subscription.price}
          name={subscription.name}
          excerpt={subscription.excerpt}
          content={subscription.content}
          image={subscription.image}
        />
      ))}

    </Layout>
  );
};
export default Spectacles;

export async function getStaticProps({ preview }) {
  const allSubscriptions = await getAllSubscriptions(preview);
  return {
    props: { allSubscriptions },
  };
}
