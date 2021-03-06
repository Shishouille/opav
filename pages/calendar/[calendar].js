import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

import ErrorPage from 'next/error';
import Head from 'next/head';

import Loader from '../../components/Loader';
import Container from '../../components/container';
import Layout from '../../components/layout';
import DayEvent from '../../components/DayEvent';

import { getCalendarSpectacles } from '../../lib/api';


const Spectacle = ({ calendar, preview }) => {
  const router = useRouter();
  const currentYear = router.query.calendar;
  const CYN1 = +currentYear + 1;
  const CYN0 = +currentYear - 1;
  if (!router.isFallback && !currentYear) {
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
                  {currentYear} | Opéra de Paris
                </title>
                {/* <meta property="og:image" content={spectacle.ogImage.url} /> */}
              </Head>
              <nav className="w-full m-auto text-center">
                <Link as={`/calendar/${CYN0}`} href="/calendar/[calendar]"><a className="mx-2 text-xl md:text-3xl border-b-2 border-red-800 pt-2">{CYN0}</a></Link>
                <Link as={`/calendar/${currentYear}`} href="/calendar/[calendar]"><a className="mx-2 text-xl md:text-3xl border-b-2 border-red-800 pt-2"> {+currentYear}</a></Link>
                <Link as={`/calendar/${CYN1}`} href="/calendar/[calendar]"><a className="mx-2 text-xl md:text-3xl border-b-2 border-red-800 pt-2">{CYN1}</a></Link>
              </nav>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Janvier</h2>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Frévrier</h2>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Mars</h2>
              <div className="md:flex md:justify-between mb-2">
                {Object.values(calendar).map((day) => (
                  <DayEvent
                    key={day.id}
                    spectacle={day.spectacle}
                    day={day.day}
                    month={day.month}
                    year={day.year}
                  />
                ))}
              </div>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Avril</h2>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Mai</h2>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Juin</h2>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Juillet</h2>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Août</h2>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Septembre</h2>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Octobre</h2>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Novembre</h2>
              <h2 className="spectacle-subtitle border-b-2 border-black py-2 mb-2">Décembre</h2>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Spectacle;


export async function getStaticProps({ params }) {
  const data = await getCalendarSpectacles(+params.calendar, 3);
  return {
    props: {
      calendar: {
        ...data,
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { calendar: '2020' } }, { params: { calendar: '2021' } }, { params: { calendar: '2022' } }],
    fallback: true,
  };
}
