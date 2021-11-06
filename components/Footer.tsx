import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="grid lg:grid-cols-3 w-4/5 mx-auto">
        <div className="col-start-1 col-end-1 text-center lg:text-left cursor-pointer">
          <Link href="/" passHref>
            <Image
              src="/Images/logo-white.svg"
              alt="Brand Logo"
              width={150}
              height={20}
              layout="fixed"
            />
          </Link>
        </div>

        <div className="row-start-2 row-end-2 flex justify-center lg:justify-start my-8 lg:my-0">
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

        <div className="row-span-2 flex flex-col items-center lg:items-start">
          <Link href="/" passHref>
            <a className="mb-4">HOME</a>
          </Link>
          <Link href="/stories" passHref>
            <a className="mb-4">STORIES</a>
          </Link>
          <Link href="/features" passHref>
            <a className="mb-4">FEATURES</a>
          </Link>
          <Link href="/pricing" passHref>
            <a className="mb-4">PRICING</a>
          </Link>
        </div>
        <div className="flex items-center my-8 lg:my-0 justify-center lg:justify-start">
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

        <div className="text-center lg:text-left">
          <p>Copyright 2020.All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
