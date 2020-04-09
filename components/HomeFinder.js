import React, { useState } from 'react';
import Link from 'next/link';

const HomeFinder = () => {
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [category, setCategory] = useState('opera');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleChangePrice = (event) => {
    switch (event.target.value) {
      case '10':
        setMinPrice(10);
        setMaxPrice(50);
        break;
      case '50':
        setMinPrice(50);
        setMaxPrice(100);
        break;
      case '100':
        setMinPrice(100);
        setMaxPrice(150);
        break;
      case '150':
        setMinPrice(150);
        setMaxPrice(200);
        break;
      default:
    }
  };
  return (
    <div>
      <h2 className="title text-center">
        Trouver un Spectacle
      </h2>
      <div>
        <div className="inline-block relative w-full">
          <select onChange={handleChangePrice} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Tous les Prix</option>
            <option value="10">10-50€</option>
            <option value="50">50-100€</option>
            <option value="100">100-150€</option>
            <option value="150">150-200€</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
        <div className="inline-block relative w-full">
          <select onChange={handleChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Catégorie</option>
            <option value="opera">Opéra</option>
            <option value="ballet">Ballet</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
        <Link href={{ pathname: '/spectacles', query: { minprice: `${minPrice}`, maxprice: `${maxPrice}`, category: `${category}` } }}>
          <button type="button" className="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Trouvez les spectacles
          </button>
        </Link>
        <button type="button" className="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <Link as="/calendar/2021" href="/calendar/[calendar]">Voir le calendrier </Link>
        </button>
      </div>

    </div>
  );
};

export default HomeFinder;
