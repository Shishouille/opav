import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [openSpectacles, setOpenSpectacles] = useState(false);
  const [openOpera, setOpenOpera] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <menu className="min-w-screen flex flex-col flex-no-wrap justify-between px-0 my-0">
      <div className="">
        <div>
          <Link href="/">
            <a><img className="w-12 mx-auto my-3" src="https://www.datocms-assets.com/25425/1586349853-logo-opera.jpg" alt="Logo" /></a>
          </Link>
        </div>
        <nav className="flex justify-between">
          <div className="w-full">
            <p className="nav border-r-2 border-orange-500 text-center bg-orange-100 cursor-pointer" onClick={() => setOpenSpectacles(!openSpectacles)}>
              Spectacles
            </p>
            {openSpectacles
          && (
            <div className="w-screen h-screen">
              <div alt="Fermer la fenêtre" onClick={() => setOpenSpectacles(!openSpectacles)} />
              <div>
                <Link href="/spectacles">Programmation</Link>
              </div>
              {/* <div>
                <Link href="/">Billeterie</Link>
              </div> */}
              <div>
                <Link href="/">Abonnements</Link>
              </div>
              {/* <div>
                <Link href="/">Services & Infos Pratiques</Link>
              </div> */}
            </div>
          )}
          </div>

          <div className="w-full">
            <p className="nav border-l-2 border-orange-500 text-center bg-orange-100 cursor-pointer" onClick={() => setOpenOpera(!openOpera)}>L'Opéra</p>
            {openOpera
          && (
            <div className="text-right">
              <div>
                <Link href="/">Visiter</Link>
              </div>
              {/* <div>
                <Link href="/">Histoire de l'Opéra</Link>
              </div> */}
              <div>
                <Link href="/artists">Artistes</Link>
              </div>
              {/* <div>
                <Link href="/">Formation & Transmission</Link>
              </div> */}
            </div>
          )}
          </div>
        </nav>
      </div>
      <div>
        <nav>
          {/* <div className="flex justify-between">
            <p className="text-gray-700">
              Soutenez-nous
            </p>
            <p className="text-gray-700">
              Octave Magazine
            </p>
            <p className="text-gray-700">
              Boutique
            </p>
            <p className="text-gray-700">
              3è Scène
            </p>
          </div> */}
          <div className="flex justify-end">
            <img src="" alt="Recherche" onClick={() => setOpenSearch(true)} />
            <p className="mx-5">
              FR
            </p>
            {/* <p className="mx-5 text-gray-700">
              EN
            </p> */}
          </div>
          {openSearch
          && (
            <form className="w-screen max-w-sm">
              <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Recherche..." aria-label="Chercher" />
                <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                  Valider
                </button>
                <button onClick={() => setOpenSearch(false)} className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                  Annuler
                </button>
              </div>
            </form>
          )}
        </nav>
      </div>
    </menu>
  );
};

export default Header;
