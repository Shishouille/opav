import React from 'react';
import Link from 'next/link';
import CoverImage from './cover-image';

const SpectaclesList = ({
  id,
  slug,
  title,
  toDate,
  fromDate,
  image,
  compositor,
  category,
}) => (
  <li className="md:w-1/3 md:mx-10">
    <div className="flex flex-col justify-center items-center spectacle-title my-5">
      <h2 className="spectacle-category">{category}</h2>
      <CoverImage
        title={title}
        responsiveImage={image.responsiveImage}
      />
      <figure className="spectacle-description md:w-4/5">
        <Link as={`/spectacles/${slug}`} href="/spectacles/[spectacle]">
          <a href="">
            <h2 className=" mb-2">{title}
              <h3 className="text-base font-normal">{compositor}</h3>
            </h2>
          </a>
        </Link>
        <p className="font-normal text-normal">Du {fromDate}</p>
        <p className="font-normal text-normal">au {toDate} </p>
      </figure>
    </div>
  </li>
);

export default SpectaclesList;
