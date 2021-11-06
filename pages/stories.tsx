import { NextPage } from "next";
import { Gallery, AdContainer2 } from "../components";
import { MockImage } from "../mock";

const GalleryCollections = () => {
  return (
    <div className="flex flex-wrap">
      {MockImage.map((image, index) => (
        <Gallery
          key={index}
          date={image.date}
          owner={image.owner}
          picture={image.imageSrc}
          title={image.title}
        />
      ))}
    </div>
  );
};

const stories: NextPage = ({}) => {
  return (
    <div>
      <AdContainer2
        picture="/Images/moon-of-appalacia.jpg"
        subHeader="Last month's featured story"
        title="HAZZY FULL MOON OF APPALACHIA"
        description={`The dissected plateau area, while not actually made up of geological
        mountains, is popularly called "mountains," especially in eastern
        Kentucky and West Virginia, and while the ridges are not high, the
        terrain is extremely rugged.`}
        date="March 2nd 2020"
        owner="John Appleseed"
      />
      {GalleryCollections()}
    </div>
  );
};

export default stories;
