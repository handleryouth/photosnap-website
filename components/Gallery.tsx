import Image from "next/image";

interface GalleryProps {
  picture: string;
  title: string;
  owner: string;
  date?: string;
}

export const Gallery: React.FC<GalleryProps> = ({
  picture,
  title,
  owner,
  date,
}) => {
  return (
    <div className="w-1/4 relative text-white">
      <div className="relative " style={{ width: "100%", height: "500px" }}>
        <Image
          src={picture}
          alt="Story Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute h-full bg-opacity-30 bg-black w-full flex flex-col justify-end top-0 p-8">
        {date && <p>{date}</p>}
        <p>{title}</p>
        <p className="border-b-2 pb-4">By {owner}</p>

        <div className="flex items-center pt-4">
          <p>READ STORY</p>
          <div className="ml-3">
            <Image
              src="/Images/arrow-white.svg"
              alt="Arrow button"
              width={30}
              height={10}
              layout="fixed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
