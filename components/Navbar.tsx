import Image from "next/image";
import Link from "next/link";

export const Navbar: React.FC = ({}) => {
  return (
    <div className="flex justify-between mx-4 py-5 items-center ">
      <div className="cursor-pointer">
        <Link href="/" passHref>
          <Image
            src="/Images/logo.svg"
            alt="Brand Logo"
            width={150}
            height={16}
            layout="fixed"
          />
        </Link>
      </div>

      <div>
        <Link href="/stories" passHref>
          <a className="mx-4 text-xs font-bold  tracking-0.3rem"> STORIES</a>
        </Link>
        <Link href="/features" passHref>
          <a className="mx-4 text-xs font-bold tracking-0.3rem"> FEATURES</a>
        </Link>
        <Link href="/pricing" passHref>
          <a className="mx-4 text-xs font-bold  tracking-0.3rem">PRICING </a>
        </Link>
      </div>

      <button className="bg-black text-white px-8 py-2 text-xs tracking-widest">
        GET AN INVITE
      </button>
    </div>
  );
};
