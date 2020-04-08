import React from 'react';
import CoverImage from './cover-image';

const SpectaclePage = ({
  id,
  title,
  location,
  lang,
  category,
  content,
  image,
  credits,
  fromDate,
  toDate,
  time,
  firstSpectacle,
}) => (
  <main>
    <h1 className="title text-center">{title}</h1>
    <div>
      <CoverImage
        title={title}
        responsiveImage={image.responsiveImage}
      />
      <p>{credits}</p>
    </div>
    <div>
      {/* <span>Tag (Nouveau)</span> */}
      <h2 className="subtitle">{category}</h2>
      {/* <h2>Réalisateur</h2> */}
    </div>
    <div>
      {/* <button type="button">En vente le ou acheter les billets</button>
        <h2>Retrouvez nos abonnements</h2> */}
    </div>
    <div>
      {/* <h3>Lieu</h3> */}
      <h3>Du {fromDate} Au {toDate}</h3>
    </div>
    <div>
      <div>
        <h2 className="subtitle">Durée</h2>
        <h3>{time}</h3>
      </div>
      <div>
        <h2 className="subtitle">Langue</h2>
        <h3>{lang}</h3>
        <h2 className="subtitle">Surtitrage</h2>
        <h3 />
      </div>
      <div>
        <h2 className="subtitle">Première</h2>
        <h3>{firstSpectacle}</h3>
      </div>
    </div>
    <div>
      <h3 className="title text-center">A propos</h3>
      <p>{content}</p>
    </div>
  </main>
);
export default SpectaclePage;
