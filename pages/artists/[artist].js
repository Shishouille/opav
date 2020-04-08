import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import React from 'react';

import { getArtistbySlug, getAllArtistsWithSlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

const Artist = ({ artist, preview }) => {
  const router = useRouter();
  console.log(artist)
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
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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