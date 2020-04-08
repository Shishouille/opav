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
          <img className= "w-12 mx-auto my-3" src="https://www.datocms-assets.com/25425/1586349853-logo-opera.jpg" alt="Logo" />
        </div>
        <nav className="flex justify-between">
          <div className="w-full">
            <p className="nav border-r-2 border-orange-500 text-center bg-orange-100" onClick={()=> setOpenSpectacles(true)}>
              Spectacles
            </p>
            {openSpectacles
          && (
            <div>
              <div alt="Fermer la fenêtre" onClick={() => setOpenSpectacles(false)} />
              <div>
                <Link href="/">Programmation</Link>
              </div>
              <div>
                <Link href="/">Billeterie</Link>
              </div>
              <div>
                <Link href="/">Abonnement</Link>
              </div>
              <div>
                <Link href="/">Services & Infos Pratiques</Link>
              </div>
            </div>
          )}
          </div>

          <div className="w-full">
            <p className="nav border-l-2 border-orange-500 text-center bg-orange-100" onClick={()=> setOpenOpera(true)}>L'Opéra</p>
            {openOpera
          && (
            <div>
              <div>
                <Link href="/">Visiter</Link>
              </div>
              <div>
                <Link href="/">Histoire de l'Opéra</Link>
              </div>
              <div>
                <Link href="/">Artites</Link>
              </div>
              <div>
                <Link href="/">Formation & Transmission</Link>
              </div>
            </div>
          )}
          </div>
        </nav>
      </div>
      <div>
        <nav>
          <div className="flex justify-between">
            <Link href="/">
              Soutenez-nous
            </Link>
            <Link href="/">
              Octave Magazine
            </Link>
            <Link href="/">
              Boutique
            </Link>
            <Link href="/">
              3è Scène
            </Link>
          </div>
          <div>
            <p>
              FR
            </p>
            <p>
              EN
            </p>
            <img src="" alt="Recherche" onClick={()=> setOpenSearch(true)} />
            {openSearch
          && (
            <div>
              <input type="text" />
            </div>
          )}
          </div>
        </nav>
      </div>
    </menu>
  );
};

export default Header;
