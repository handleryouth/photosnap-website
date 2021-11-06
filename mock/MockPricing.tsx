interface MockPricingProps {
  type: string;
  description: string;
  monthPrice: number;
  yearPrice: number;
}

export const MockPricing: MockPricingProps[] = [
  {
    type: "Basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    monthPrice: 19,
    yearPrice: 190,
  },
  {
    type: "Pro",
    description:
      "More advanced features available. Recommended for photography veterans and professionals. ",
    monthPrice: 39,
    yearPrice: 390,
  },
  {
    type: "Business",
    description:
      "Additional features available such as more detailed metrics. Recommended for business owners. ",
    monthPrice: 99,
    yearPrice: 990,
  },
];
