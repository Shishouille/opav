import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import React from 'react';

import ArtistPage from '../../components/ArtistPage';
import Container from '../../components/container';
import Layout from '../../components/layout';

import { getArtistbySlug, getAllArtistsWithSlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

const Artist = ({ artist, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !artist?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
    <Container>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {artist.name} | Opéra de Paris
              </title>
              {/* <meta property="og:image" content={spectacle.ogImage.url} /> */}
            </Head>
            <ArtistPage
              id={artist.id}
              slug={artist.slug}
              name={artist.name}
              category={artist.category.name}
              excerpt={artist.excerpt}
              content={artist.content}
              image={artist.image}
              credits={artist.credits}
              spectacle={artist.spectacle}
            />
          </article>
        </>
      )}
    </Container>
  </Layout>
  );
};

export default Artist;


export async function getStaticProps({ params }) {
  const data = await getArtistbySlug(params.artist);
  // const content = await markdownToHtml(data?.content || '');
  return {
    props: {
      artist: {
        ...data,
        // content,
      },
    },
  };
}

export async function getStaticPaths() {
  const artists = await getAllArtistsWithSlug();
  const params = artists?.map((artist) =>
    ({ params: { artist: artist.slug } })
  );

  return {
    paths: params,
    fallback: true,
  };
}