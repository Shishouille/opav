import { Image } from 'react-datocms';

export default function CoverImage({ title, responsiveImage }) {
  return (
    <Image
      data={{
        ...responsiveImage,
        alt: `${title}`,
      }}
    />
  );
}
