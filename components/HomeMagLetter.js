import Link from 'next/link';
import React from 'react';

const HomeMagLetter = () => {
  return (
    <div>
      <div>
        <h2>Octave Magazine</h2>
        <img src="" alt=""/>
        <p>Titre</p>
        <Link href="/">Voir</Link>
      </div>
      <div>
        <h2>Brève</h2>
        <p>Date</p>
        <p>Nouvelle</p>
        <Link href="/">En savoir plus</Link>
      </div>
    </div>
  )
}

export default HomeMagLetter;
