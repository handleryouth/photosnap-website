import type { NextPage } from "next";
import { AdContainer } from "../components/AdContainer";
import { Feature } from "../components/Feature";
import { Gallery } from "../components/Gallery";

const Ads = () => {
  return (
    <div>
      <AdContainer
        picture="/Images/create-and-share.jpg"
        title="CREATE AND SHARE YOUR PHOTO STORIES"
        subTitle="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonText="GET AN INVITE"
        imagePosition="right"
      />
      <AdContainer
        picture="/Images/beautiful-stories.jpg"
        title="BEAUTIFUL STORIES EVERYTIME"
        subTitle="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        buttonText="VIEW THE STORIES"
        imagePosition="left"
      />
      <AdContainer
        picture="/Images/designed-for-everyone.jpg"
        title="DESIGNED FOR EVERYONE"
        subTitle="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
        buttonText="VIEW THE STORIES"
        imagePosition="right"
      />
    </div>
  );
};

const GalleryCollections = () => {
  return (
    <div className="flex flex-wrap flex-row ">
      <Gallery
        picture="/Images/mountains.jpg"
        owner="John Appleseed"
        title="The Mountains"
      />
      <Gallery
        picture="/Images/cityscapes.jpg"
        owner="Bensjamin Cruz"
        title="Sunset Cityscapes"
      />
      <Gallery
        picture="/Images/18-days-voyage.jpg"
        owner="Alexei Borodin"
        title="18 Days Voyage"
      />
      <Gallery
        picture="/Images/architecturals.jpg"
        owner="Samantha Brooke"
        title="Architectural"
      />
    </div>
  );
};

const FeaturesCollections = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-6 justify-center my-16">
      <Feature
        image="/Images/responsive.svg"
        title="100% Responsive"
        subTitle="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
      />

      <Feature
        image="/Images/no-limit.svg"
        title="No Photo Upload Limit"
        subTitle="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
      />

      <Feature
        image="/Images/embed.svg"
        title="Available to Embed"
        subTitle="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
      />
    </div>
  );
};

const home: NextPage = () => {
  return (
    <div>
      {Ads()}
      {GalleryCollections()}
      {FeaturesCollections()}
    </div>
  );
};

export default home;
