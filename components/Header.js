import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [openSpectacles, setOpenSpectacles] = useState(false);
  const [openOpera, setOpenOpera] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <menu className="min-w-screen flex justify-between">
      <div className="">
        <div>
          <img src="" alt="" />
        </div>
        <nav>
          <div>
            <p onClick={()=> setOpenSpectacles(true)}>
              Spectacles
            </p>
            {openSpectacles
          && (
            <div>
              <div alt="Fermer la fenêtre" onClick={() => setOpenSpectacles(false)} />
              <div>
                <Link href="/"> Programmation</Link>
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

          <div>
            <p onClick={()=> setOpenOpera(true)}>L'Opéra</p>
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
          <div>
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
