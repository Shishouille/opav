import Head from 'next/head';

import Layout from '../components/layout';
import News from '../components/HomeNews';
import Artists from '../components/HomeArtists';
import Finder from '../components/HomeFinder';
// import MagLetter from '../components/HomeMagLetter';
import { getAllArtistsHomePage } from '../lib/api';

export default function Index({ allArtists }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Opéra de Paris</title>
        </Head>
        <News />
        <h2 className="title text-center my-5"> Sélection d'artistes</h2>
        <div className="md:flex">
        {allArtists.map((artist) => (
          <Artists
          slug={artist.slug}
          name={artist.name}
          category={artist.category.name}
          excerpt={artist.excerpt}
          image={artist.image}
          spectacle={artist.spectacle.title}
        /> 
        )
        )}
        </div>
        <Finder />
        {/* <MagLetter /> */}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allArtists = await getAllArtistsHomePage(preview);
  return {
    props: { allArtists },
  };
}
