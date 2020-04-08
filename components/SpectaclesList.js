import React from 'react';
import CoverImage from './cover-image';
import Link from 'next/link';

const SpectaclesList = ({
  id,
  slug,
  title,
  toDate,
  fromDate,
  image,
  compositor,
  category,
}) => {
  return(
    <li>
      <Link as={`/spectacles/${slug}`} href="/spectacles/[spectacle]">
        <a href="">
        <div className="flex flex-col justify-center items-center">
        <h2 className="">{category}</h2>
          <CoverImage
            title={title}
            responsiveImage={image.responsiveImage}
          />
        <figure className="text-center">
          <h2 className="title">{title}</h2>
          <h3 className="subtitle">{compositor}</h3>
          <p>Du {fromDate}</p>
          <p>au {toDate} </p>
        </figure>
        </div>
        </a>
      </Link>
    </li>
);
  };

export default SpectaclesList;
