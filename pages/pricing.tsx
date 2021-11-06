import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Price, AdContainer } from "../components";
import { MockPricing, MockComparing } from "../mock";
import { AdContainer3 } from "../components/AdContainer3";

const pricingContainer = (
  time: boolean,
  setTime: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return (
    <div>
      <div className="flex items-center justify-center mt-16 mb-8">
        <p className="mr-4 text-lg font-bold tracking-widest">Monthly</p>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setTime((prevState) => !prevState)}
          />
          <span className="slider round" />
        </label>
        <p className="ml-4 text-lg font-bold tracking-widest">Yearly</p>
      </div>

      <div className="flex text-center justify-center">
        {MockPricing.map((item, index) => {
          return (
            <Price
              key={index}
              type={item.type}
              description={item.description}
              monthPrice={item.monthPrice}
              yearPrice={item.yearPrice}
              time={time}
            />
          );
        })}
      </div>
    </div>
  );
};

const compareContainer = () => {
  const checkImage = () => {
    return (
      <>
        <Image
          src="/Images/check.svg"
          width={15}
          height={15}
          layout="fixed"
          alt="true"
        />
      </>
    );
  };

  return (
    <div>
      <h1 className="text-center text-5xl tracking-wider mt-24 mb-20">
        COMPARE
      </h1>
      <table className="w-6/12 mx-auto mb-32 ">
        <thead className="text-left">
          <th className="py-6 text-sm tracking-wider font-bold">
            THE FEATURES
          </th>
          <th className="py-6 text-sm tracking-wider text-center font-bold">
            BASIC
          </th>
          <th className="py-6 text-sm tracking-wider text-center font-bold">
            PRO
          </th>
          <th className="py-6 text-sm tracking-wider text-center font-bold">
            BUSINESS
          </th>
        </thead>

        <tbody>
          {MockComparing.map((feature, index) => {
            return (
              <tr key={index}>
                <td className="py-6 text-sm tracking-wider font-bold">
                  {feature.title}
                </td>
                <td className="py-6 text-sm tracking-wider text-center font-bold">
                  {feature.basic ? checkImage() : ""}
                </td>
                <td className="py-6 text-sm tracking-wider text-center font-bold">
                  {feature.pro ? checkImage() : ""}
                </td>
                <td className="py-6 text-sm tracking-wider text-center font-bold">
                  {feature.business ? checkImage() : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Pricing: NextPage = () => {
  const [time, setTime] = useState<boolean>(false);
  return (
    <div>
      <AdContainer
        picture="/Images/pricing-bg.jpg"
        title="PRICING"
        subTitle="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
      />

      {pricingContainer(time, setTime)}
      {compareContainer()}
      <AdContainer3 title="WE'RE IN BETA. GET YOUR INVITE TODAY!" />
    </div>
  );
};

export default Pricing;
