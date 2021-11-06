import Image from "next/image";

interface FeatureProps {
  image: string;
  title: string;
  subTitle: string;
}

export const Feature: React.FC<FeatureProps> = ({ image, title, subTitle }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt="Features Image"
        width={50}
        height={50}
        layout="fixed"
      />
      <p className="my-4 font-bold">{title}</p>
      <p className="text-gray-500 w-80">{subTitle}</p>
    </div>
  );
};
