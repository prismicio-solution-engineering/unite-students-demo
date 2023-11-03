import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextAndImageSection`.
 */
export type TextAndImageSectionProps =
  SliceComponentProps<Content.TextAndImageSectionSlice>;

/**
 * Component for "TextAndImageSection" Slices.
 */
const TextAndImageSection = ({
  slice,
}: TextAndImageSectionProps): JSX.Element => {
  return (
    <div className="py-12">
      <div className="bg-white flex flex-col sm:flex-row justify-between items-center mx-auto">
        <div className="w-full sm:w-1/2">
          <PrismicNextImage 
            field={slice.primary.image}
            className="object-cover h-72 w-full"
          />
        </div>
        <div className="pl-12 mt-8 sm:mt-0 w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="font-lato text-2xl text-[#333333] mb-2">
            {slice.primary.title}
          </h2>
          <p className="font-lato text-lg text-[#333333] mb-4">
            {slice.primary.subtitle}
          </p>
          <p className="font-open-sans text-md text-[#333333] mb-6">
            {slice.primary.description}
          </p>
          <button className="text-[#ffdc00] bg-[#333333] px-12 py-4 font-lato rounded-sm">
            {slice.primary.button_text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextAndImageSection;
