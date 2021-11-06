import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="grid grid-cols-3 w-4/5 mx-auto">
        <div className="col-start-1 col-end-1">
          <Image
            src="/Images/logo-white.svg"
            alt="Brand Logo"
            width={150}
            height={16}
            layout="fixed"
          />
        </div>

        <div className="row-start-2 row-end-2 flex">
          <div className="mr-2">
            <Image
              src="/Images/facebook.svg"
              alt="Brand Logo"
              width={25}
              height={25}
              layout="fixed"
            />
          </div>

          <div className="mr-2">
            <Image
              src="/Images/youtube.svg"
              alt="Brand Logo"
              width={25}
              height={25}
              layout="fixed"
            />
          </div>

          <div className="mr-2">
            <Image
              src="/Images/twitter.svg"
              alt="Brand Logo"
              width={25}
              height={25}
              layout="fixed"
            />
          </div>

          <div className="mr-2">
            <Image
              src="/Images/pinterest.svg"
              alt="Brand Logo"
              width={25}
              height={25}
              layout="fixed"
            />
          </div>
        </div>

        <div className="row-span-2 flex flex-col">
          <Link href="#" passHref>
            <a className="mb-4">HOME</a>
          </Link>
          <Link href="#" passHref>
            <a className="mb-4">STORIES</a>
          </Link>
          <Link href="#" passHref>
            <a className="mb-4">FEATURES</a>
          </Link>
          <Link href="#" passHref>
            <a className="mb-4">PRICING</a>
          </Link>
        </div>
        <div className="flex items-center">
          <p>GET AN INVITE</p>
          <div className="ml-2">
            <Image
              src="/Images/arrow-white.svg"
              alt="Arrow button"
              width={40}
              height={15}
              layout="fixed"
            />
          </div>
        </div>

        <div>
          <p>Copyright 2020.All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
