import Image from "next/image";

interface AdContainerProps {
  picture: string;
  title: string;
  subTitle: string;
  buttonText?: string;
  imagePosition?: "left" | "right";
}

export const AdContainer: React.FC<AdContainerProps> = ({
  picture,
  title,
  subTitle,
  buttonText,
  imagePosition = "right",
}) => {
  return (
    <div
      className={`${
        imagePosition === "right" ? "flex-row" : "flex-row-reverse"
      } flex items-center bg-black text-white `}
    >
      <div className=" px-28 flex-grow w-300">
        <h1 className="text-4xl leading-snug">{title}</h1>
        <p className="text-darkGray my-8">{subTitle}</p>

        {buttonText && (
          <div className="flex items-center">
            {buttonText}
            <div className="ml-3  ">
              <Image
                src="/Images/arrow-white.svg"
                alt="Arrow button"
                width={40}
                height={15}
                layout="fixed"
              />
            </div>
          </div>
        )}
      </div>

      <div className="relative" style={{ width: "100%", height: "30rem" }}>
        <Image
          src={picture}
          alt="Image illutstration"
          layout="fill"
          objectFit="fill"
        />
      </div>
    </div>
  );
};
