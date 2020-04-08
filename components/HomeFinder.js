import React from 'react';
import Link from 'next/link';

const HomeFinder = () => {
  return (
    <div>
    <h2 className="title text-center">
      Trouver un Spectacle
    </h2>
      <div>
    <div class="inline-block relative w-full">
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Tous les Prix</option>
    <option>10-50€</option>
    <option>50-100€</option>
    <option>100-150€</option>
    <option>150-200€</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
<button class="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Lancer la recherche
</button>
<button class="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Voir le calendrier
</button>
</div>

    </div>
  );
};

export default HomeFinder;
