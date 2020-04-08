import Head from 'next/head';

import Container from '../components/container';
import Layout from '../components/layout';
import News from '../components/HomeNews';
import Artists from '../components/HomeArtists';
import Finder from '../components/HomeFinder';
import MagLetter from '../components/HomeMagLetter';
import { getAllArtistsHomePage } from '../lib/api';

export default function Index({ allArtists }) {
  const artist = allArtists[0];
  return (
    <>
      <Layout>
        <Head>
          <title>Opéra de Paris</title>
        </Head>
        <Container>
          <News />
          <Artists
            slug={artist.slug}
            name={artist.name}
            category={artist.category.name}
            excerpt={artist.excerpt}
            image={artist.image}
            spectacle={artist.spectacle.title}
          />
          <Finder />
          <MagLetter />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allArtists = await getAllArtistsHomePage(preview);
  return {
    props: { allArtists },
  };
};