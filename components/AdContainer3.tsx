import Image from "next/image";

interface AdContainer3Props {
  title: string;
}

export const AdContainer3: React.FC<AdContainer3Props> = ({ title }) => {
  return (
    <div className="relative bg-mountain-image bg-no-repeat bg-cover ">
      <div className="custom-border-left border-l-8 h-80"></div>
      <div className="absolute lg:inset-y-1/4 text-white flex flex-col lg:flex-row justify-center lg:justify-between items-center left-0 right-0 mx-auto lg:w-9/12 h-full lg:h-auto top-0 lg:top-auto px-8 lg:px-0  ">
        <h1 className="text-3xl xl:text-5xl tracking-widest lg:w-2/5 leading-tight w-full">
          {title}
        </h1>
        <div className="flex mt-8 items-center w-full lg:w-auto">
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
