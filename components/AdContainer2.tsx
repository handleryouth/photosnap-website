import Image from "next/image";

interface AdContainer2Props {
  picture: string;
  title?: string;
  owner?: string;
  description?: string;
  subHeader?: string;
  date?: string;
}

export const AdContainer2: React.FC<AdContainer2Props> = ({
  picture,
  subHeader,
  title,
  owner,
  description,
  date,
}) => {
  return (
    <div className="relative">
      <div className="relative" style={{ width: "100%", height: "35rem" }}>
        <Image
          src={picture}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="hidden lg:block absolute top-20  text-white  left-1/4">
        <p className="mb-4 font-bold tracking-wider">{subHeader}</p>
        <h1 className="text-4xl tracking-widest w-96">{title}</h1>
        <p className="my-8 text-gray-500">
          {date} <span className="text-white">{owner && `by ${owner}`}</span>
        </p>
        <p className="text-gray-500 w-96">{description}</p>
        <div className="flex mt-8 items-center">
          <p>GET AN INVITE</p>
          <div className="ml-3">
            <Image
              src="/Images/arrow-white.svg"
              alt="Arrow button"
              width={40}
              height={15}
              layout="fixed"
            />
          </div>
        </div>
      </div>

      <div className="text-white bg-black px-6 py-8 lg:hidden">
        <p className="mb-4 font-bold tracking-wider">{subHeader}</p>
        <h1 className="text-4xl tracking-widest ">{title}</h1>
        <p className="my-8 text-gray-500">
          {date} <span className="text-white">{owner && `by ${owner}`}</span>
        </p>
        <p className="text-gray-500">{description}</p>
        <div className="flex mt-8 items-center">
          <p>GET AN INVITE</p>
          <div className="ml-3">
            <Image
              src="/Images/arrow-white.svg"
              alt="Arrow button"
              width={40}
              height={15}
              layout="fixed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
