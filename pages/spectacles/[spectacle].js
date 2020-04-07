import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import React from 'react';

import { getSpectacleBySlug, getAllSpectaclesWithSlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

const Spectacle = ({ spectacles, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !spectacles?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <h1>Coucou</h1>
  );
};

export default Spectacle;


export async function getStaticProps({ params }) {
  const data = await getSpectacleBySlug(params.spectacle);
  const content = await markdownToHtml(data?.content || '');
  return {
    props: {
      spectacles: {
        ...data,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const spectacle = await getAllSpectaclesWithSlug();
  const params = spectacle?.map((spectacle) =>
    ({ params: { spectacle: spectacle.slug } })
  );

  return {
    paths: params,
    fallback: true,
  };
}