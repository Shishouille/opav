import React from 'react';
import Link from 'next/link';

const SpectaclesList = ({
  id,
  slug,
  title,
  toDate,
  fromDate,
  // image,
  compositor,
  category,
}) => (
  <ul>
    <li>
      <Link as={`/spectacles/${slug}`} href="/spectacles/[spectacle]">
        <a href="">
        {/* <img src={image.basename} alt={image.alt} /> */}
        <span>{category}</span>
        <span>{title}</span>
        <span>{compositor}</span>
        <span>Du {fromDate} au {toDate} </span>
        </a>
      </Link>
    </li>
  </ul>
);

export default SpectaclesList;
