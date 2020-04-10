import Link from 'next/link';
import React from 'react';

const HomeNews = () => (
  <div className="hd-line">
    <div className="hd-display hd-bubble">
      <div className="text-bubble hd-text-bubble">
        <h2 className="hd-title title">En ce Moment</h2>
        <h2 className="hd-subtitle">L'Opéra dévoile sa saison 20/21 !</h2>
        <Link href="/spectacles"><a className="hd-link mx-auto">Découvrir</a></Link>
      </div>
    </div>
  </div>
);

export default HomeNews;
