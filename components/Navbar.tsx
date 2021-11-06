import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";

export const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-between lg:px-4 py-5 items-center relative z-10">
      <div className="cursor-pointer pl-4 lg:pl-0">
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

      {toggleOpen && (
        <div className="absolute lg:hidden bg-white w-screen flex flex-col top-20 h-screen text-center slide-in-top ">
          <Link href="/stories" passHref>
            <a
              onClick={() => setToggleOpen((prevState) => !prevState)}
              className="mx-4 text-xs font-bold tracking-0.3rem my-8 "
            >
              {" "}
              STORIES
            </a>
          </Link>
          <Link href="/features" passHref>
            <a
              onClick={() => setToggleOpen((prevState) => !prevState)}
              className="mx-4 text-xs font-bold tracking-0.3rem my-8"
            >
              {" "}
              FEATURES
            </a>
          </Link>
          <Link href="/pricing" passHref>
            <a
              onClick={() => setToggleOpen((prevState) => !prevState)}
              className="mx-4 text-xs font-bold  tracking-0.3rem my-8"
            >
              PRICING{" "}
            </a>
          </Link>
        </div>
      )}

      <div className="lg:hidden pr-4 lg:pr-4">
        <Hamburger
          toggled={toggleOpen}
          toggle={() => setToggleOpen((prevState) => !prevState)}
          size={20}
        />
      </div>

      <div className="hidden lg:block">
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

      <button className="bg-black text-white px-8 py-2 text-xs tracking-widest hidden lg:block">
        GET AN INVITE
      </button>
    </div>
  );
};
