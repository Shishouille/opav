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
  subscriptions,
  subtitles,
}) => (
  <main>
    <h2 className="title text-center">{title}</h2>
    <div>
      <CoverImage
        title={title}
        responsiveImage={image.responsiveImage}
      />
      <p className="mx-2">{credits}</p>
    </div>
    <div className="mx-2">
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
      <div className="flex flex-col md:justify-center md:flex-row">
        <div className="w-full">
          <h2 className="spectacle-subtitle border-b-2 border-black">Durée</h2>
          <p>{time}</p>
        </div>
        <div className="w-full">
          <h2 className="spectacle-subtitle border-b-2 border-black">Langue</h2>
          <p>{lang}</p>
        </div>
        <div className="w-full">
          <h2 className="spectacle-subtitle border-b-2 border-black">Surtitrage</h2>
          {subtitles.map((subtitle) => <p key={subtitle.name}>{subtitle.name}</p>)}
        </div>
        <div className="w-full">
          <h2 className="spectacle-subtitle border-b-2 border-black">Abonnements</h2>
          {subscriptions.map((subscription) => <p key={subscription.name}>{subscription.name}</p>)}
        </div>
        <div className="w-full">
          <h2 className="spectacle-subtitle border-b-2 border-black">Première</h2>
          <p>{firstSpectacle}</p>
        </div>
      </div>
      <div>
        <h3 className="title">A propos</h3>
        <p>{content}</p>
      </div>
    </div>
  </main>
);
export default SpectaclePage;
