interface MockFeatures {
  title: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
}

export const MockComparing: MockFeatures[] = [
  {
    title: "UNLIMITED STORY POSTING",
    basic: true,
    pro: true,
    business: true,
  },
  {
    title: "UNLIMITED PHOTO UPLOAD",
    basic: true,
    pro: true,
    business: true,
  },
  {
    title: "EMBEDDING CUSTOM CONTENT",
    basic: false,
    pro: true,
    business: true,
  },
  {
    title: "CUSTOMIZE METADATA",
    basic: false,
    pro: true,
    business: true,
  },
  {
    title: "ADVANCED METRICS",
    basic: false,
    pro: false,
    business: true,
  },
  {
    title: "PHOTO DOWNLOADS",
    basic: false,
    pro: false,
    business: true,
  },
  {
    title: "SEARCH ENGINE INDEXING",
    basic: false,
    pro: false,
    business: true,
  },
  {
    title: "CUSTOM ANALYTICS",
    basic: false,
    pro: false,
    business: true,
  },
];
