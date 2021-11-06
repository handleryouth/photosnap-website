import Image from "next/image";

interface AdContainer3Props {
  title: string;
}

export const AdContainer3: React.FC<AdContainer3Props> = ({ title }) => {
  return (
    <div className="relative bg-mountain-image bg-no-repeat bg-cover ">
      <div className="custom-border-left border-l-8 h-80"></div>
      <div className="absolute inset-y-1/4 text-white flex justify-between items-center left-0 right-0 mx-auto w-9/12 ">
        <h1 className="text-5xl tracking-widest w-2/5 leading-tight">
          {title}
        </h1>
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
