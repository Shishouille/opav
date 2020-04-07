import Head from 'next/head';

import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';
import News from '../components/HomeNews';
import Artists from '../components/HomeArtists';
import Finder from '../components/HomeFinder';
import MagLetter from '../components/HomeMagLetter';
import { getAllPostsForHome } from '../lib/api';

import { CMS_NAME } from '../lib/constants';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Opéra de Paris</title>
        </Head>
        <Container>
          <News />
          <Artists />
          <Finder />
          <MagLetter />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts },
  };
}
