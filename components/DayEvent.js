import React from 'react';
import Link from 'next/link';

import CoverImage from './cover-image';

const DayEvent = ({
  spectacle,
  day,
  month,
  year,
}) => (
  <div className=" artist-display md:w-1/3">
    <div className="artist-portrait border-right w-1/3">
      <Link as={`/spectacles/${spectacle[0].slug}`} href="/spectacles/[spectacle]">
        <a href="">
          <CoverImage
            title={spectacle.title}
            responsiveImage={spectacle[0].image.responsiveImage}
          />
          <h2 className="text-center">{day}/{month}/{year} </h2>
        </a>
      </Link>
    </div>
    <div className="artist-category no-border w-2/3">
      <h3 className="text-center text-lg text-black">{spectacle[0].title} | {spectacle[0].time}</h3>
      <p className="text-center mt-3 ">{spectacle[0].location.name}</p>
    </div>
  </div>
);

export default DayEvent;
