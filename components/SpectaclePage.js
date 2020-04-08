import React from 'react';

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
}) => {
  return (
    <main>
      <h1>{title}</h1>
      <div>
        {/* <img src="" alt="Photo" /> */}
        <p>{credits}</p>
      </div>
      <div>
        <span>Tag (Nouveau)</span>
        <h2>{category}</h2>
        <h2>Réalisateur</h2>
      </div>
      <div>
        <button type="button">En vente le ou acheter les billets</button>
        <h2>Retrouvez nos abonnements</h2>
      </div>
      <div>
        <h3>Lieu</h3>
        <h3>Du {fromDate} Au {toDate}</h3>
      </div>
      <div>
        <div>
          <h3>{time}</h3>
        </div>
        <div>
          <h3>{lang}</h3>
          <h3>Surtitrage</h3>
        </div>
        <div>
          <h3>{firstSpectacle}</h3>
        </div>
      </div>
      <div>
        <h3>A propos</h3>
        <p>{content}</p>
      </div>
    </main>
  );
};
export default SpectaclePage;
