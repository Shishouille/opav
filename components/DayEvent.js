import React from 'react';
import Link from 'next/link';

import CoverImage from './cover-image';

const DayEvent = ({
  spectacle,
  day,
  month,
  year,
}) => {
  return (
    <div>
      <div>
        <Link as={`/spectacles/${spectacle[0].slug}`} href="/spectacles/[spectacle]">
          <a>
            <div>
              <CoverImage
              title={spectacle.title}
              responsiveImage={spectacle[0].image.responsiveImage}
            />
            </div>
            <div>
              <h2>Le {day}/{month}/{year} </h2>
              <h3>{spectacle[0].title}</h3>
              <p>{spectacle[0].time}</p>
              <p>{spectacle[0].location.name}</p>
            </div>
            <div />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DayEvent;
