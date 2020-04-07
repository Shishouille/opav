import React from 'react';
import Link from 'next/link';

const HomeFinder = () => {
  return (
    <div>
    <h2>
      Trouver un Spectacle
    </h2>
    <input type="text"/>
    <select name="" id="">
      <option value="">Tous les prix</option>
    </select>
    <p> Voir le calendrier</p>
    <Link href="/"> Lancer La Recherche</Link>
    </div>
  )
}

export default HomeFinder;
