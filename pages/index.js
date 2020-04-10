import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import News from '../components/HomeNews';
import Artists from '../components/HomeArtists';
import Finder from '../components/HomeFinder';
// import MagLetter from '../components/HomeMagLetter';
import { getArtistHomePage } from '../lib/api';

export default function Index({ artist }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Opéra de Paris</title>
        </Head>
        <News />
        <Artists
          slug={artist[0].slug}
          name={artist[0].name}
          category={artist[0].category}
          excerpt={artist[0].excerpt}
          image={artist[0].image}
          spectacle={artist[0].spectacle}
        />
        <Finder />
        {/* <MagLetter /> */}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const artist = await getArtistHomePage(preview);
  return {
    props: { artist },
  };
}
