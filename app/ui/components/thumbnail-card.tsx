import Image, { StaticImageData } from "next/image";

interface ThumnailCardProps {
  img: StaticImageData;
  link: string;
  alt: string;
}

export const ThumbnailCard = ({ img, link, alt }: ThumnailCardProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={img}
        alt={alt}
        className="rounded-md transition ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-cws-bg-1/50 duration-200"
      />
    </a>
  );
};
