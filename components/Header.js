import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [openSpectacles, setOpenSpectacles] = useState(false);
  const [openOpera, setOpenOpera] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  // const [openSearch, setOpenSearch] = useState(false);
  return (
    <menu className="min-w-screen flex flex-col flex-no-wrap justify-between px-0 my-0">
      {/* OPEN MODE */}
      {openSpectacles
          && (
            <div className="menu-bg">
              <Link href="/spectacles">
                <a>
                  <div className="bubble bubble-left">
                    <div className="text-bubble">
                      Spectacles
                    </div>
                  </div>
                </a>
              </Link>
              {/* <div>
                <Link href="/">Billeterie</Link>
              </div> */}
              <Link href="/subscriptions">
                <a>
                  <div className="bubble bubble-right">
                    <div className="text-bubble">
                      Abonnements
                    </div>
                  </div>
                </a>
              </Link>
              {/* <div>
                <Link href="/">Services & Infos Pratiques</Link>
              </div> */}
              <div className="close-bubble" onClick={() => setOpenSpectacles(!openSpectacles)}><p>Fermer</p></div>
            </div>
          )}
      {openOpera
          && (
            <div className="menu-bg">
              <Link href="/visits">
                <a>
                  <div className="bubble bubble-left">
                    <div className="text-bubble">
                      Visiter
                    </div>
                  </div>
                </a>
              </Link>
              {/* <div>
                <Link href="/">Histoire de l'Opéra</Link>
              </div> */}
              <Link href="/artists">
                <a>
                  <div className="bubble bubble-right">
                    <div className="text-bubble">
                      Artistes
                    </div>
                  </div>
                </a>
              </Link>
              {/* <div>
                <Link href="/">Formation & Transmission</Link>
              </div> */}
              <div className="close-bubble" onClick={() => setOpenOpera(!openOpera)}><p>Fermer</p></div>
            </div>
          )}

      {openMenu
          && (
            <div className="menu-bg">
              <Link href="/visits">
                <a>
                  <div className="bubble bubble-left">
                    <div className="text-bubble">
                      Visiter
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/artists">
                <a>
                  <div className="bubble bubble-right">
                    <div className="text-bubble">
                      Artistes
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/spectacles">
                <a>
                  <div className="bubble bubble-left">
                    <div className="text-bubble">
                      Spectacles
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/subscriptions">
                <a>
                  <div className="bubble bubble-right">
                    <div className="text-bubble">
                      Abonnements
                    </div>
                  </div>
                </a>
              </Link>
              <div className="close-bubble" onClick={() => setOpenMenu(!openMenu)}><p>Fermer</p></div>
            </div>
          )}


      {/* CLOSE MODE */}
      <div className="nav-menu">
        <div>
          <Link href="/">
            <h1 className="cursor-pointer nav-logo">Vive l'Opéra</h1>
          </Link>
        </div>
        <nav className="flex justify-between md:hidden ">
          <div className="w-full">
            <p className="nav cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
              Menu
            </p>
          </div>
        </nav>
        <nav className="hidden w-1/3 text-right md:flex md:justify-between">
          <div className="w-full">
            <p className="nav cursor-pointer" onClick={() => setOpenSpectacles(!openSpectacles)}>
              Programmes
            </p>
          </div>
          <div className="w-full">
            <p className="nav cursor-pointer" onClick={() => setOpenOpera(!openOpera)}>L'Opéra</p>
          </div>
        </nav>
      </div>
      <div>
        {/* <nav> */}
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
        {/* <div className="flex justify-end">
            <img src="" alt="Recherche" onClick={() => setOpenSearch(true)} />
            <p className="mx-5"> */}
        {/* FR
            </p> */}
        {/* <p className="mx-5 text-gray-700">
              EN
            </p> */}
        {/* </div>
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
        </nav> */}
      </div>
    </menu>
  );
};

export default Header;
