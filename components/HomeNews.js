import Link from 'next/link';
import React from 'react';

const HomeNews = () => {
  return (
    <div>
      <h1>En ce Moment</h1>
      <div>
        <img src="" alt="" />
        <h2>L'Opéra dévoile sa saison 20/21 !</h2>
        <Link href="/spectacles"><a>Découvrir</a></Link>
      </div>
    </div>
  );
};

export default HomeNews;
