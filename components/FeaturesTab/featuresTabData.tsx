import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Image Upload or Drop",
    desc1: `In the first step, users are presented with an option to upload an image or drag and drop an image file onto the website. This step serves as the initial point of interaction, where users provide the source image that they want to transform with a specific design style.`,
    desc2: `     The user-friendly interface should allow for a smooth image upload process. `,
    image: "/upload.png",
    imageDark: "/upload.png",
  },
  {
    id: "tabTwo",
    title: "Choose Image Type (Interior or Exterior)",
    desc1: `Following the image upload, users are prompted to specify the type of image they're working with, which can be categorized as either "Interior" or "Exterior." This categorization is crucial, as it helps in aligning the design style with the context of the image.`,
    desc2: `    For instance, users may want to apply a different design style for the interior of a room compared to the exterior of a building.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "Select Design Style Types",
    desc1: `In the final step, users are presented with a selection of design style types. They can choose from a variety of design styles such as "Modern," "Classic," "Bohemian," "Minimalist," and more. `,
    desc2: `This step allows users to define the artistic or aesthetic direction they want for their image transformation. Depending on their preferences, users can select one or multiple design styles to apply to the uploaded image.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;
