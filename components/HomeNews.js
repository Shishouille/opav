import Link from 'next/link';
import React from 'react';

const HomeNews = () => {
  return (
    <div>
      <h2 className="title text-center w-full">En ce Moment</h2>
      <div className="flex flex-col">
        <img src="" alt="" />
        <h2 className="text-center ">L'Opéra dévoile sa saison 20/21 !</h2>
        <Link href="/spectacles"><a className="btn btn-blue mx-auto">Découvrir</a></Link>
      </div>
    </div>
  );
};

export default HomeNews;
