import { useRouter } from 'next/router';
import React from 'react';

import ErrorPage from 'next/error';
import Head from 'next/head';

import SpectaclePage from '../../components/SpectaclePage';
import Loader from '../../components/Loader';
import Container from '../../components/container';
import Layout from '../../components/layout';

import { getSpectacleBySlug, getAllSpectaclesWithSlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

const Spectacle = ({ spectacle, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !spectacle?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <Loader />
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {spectacle.title} | Opéra de Paris
                </title>
                {/* <meta property="og:image" content={spectacle.ogImage.url} /> */}
              </Head>
              <SpectaclePage
                id={spectacle.id}
                title={spectacle.title}
                location={spectacle.location.name}
                lang={spectacle.lang.name}
                content={spectacle.content}
                image={spectacle.image}
                credits={spectacle.credits}
                fromDate={spectacle.fromDate}
                toDate={spectacle.toDate}
                time={spectacle.time}
                firstSpectacle={spectacle.firstSpectacle}
              />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Spectacle;


export async function getStaticProps({ params }) {
  const data = await getSpectacleBySlug(params.spectacle);
  // const content = await markdownToHtml(data?.content || '');
  return {
    props: {
      spectacle: {
        ...data,
        // content,
      },
    },
  };
}

export async function getStaticPaths() {
  const spectacle = await getAllSpectaclesWithSlug();
  const params = spectacle?.map((currentSpectacle) => ({ params: { spectacle: currentSpectacle.slug } })
  );

  return {
    paths: params,
    fallback: true,
  };
}
