import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const NewsCarousel = () => (
  <Carousel infiniteLoop autoPlay>
    <div>
      <img src="" alt="" />
      <Link href="/">
        <p className="legend">Découvrir</p>
      </Link>
    </div>
    <div>
      <img src="" alt="" />
      <Link href="/">
        <p className="legend">Découvrir</p>
      </Link>
    </div>
    <div>
      <img src="" alt="" />
      <Link href="/">
        <p className="legend">Découvrir</p>
      </Link>
    </div>
  </Carousel>
);

export default NewsCarousel;
