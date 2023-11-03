import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBanner`.
 */
export type TextBannerProps = SliceComponentProps<Content.TextBannerSlice>;

/**
 * Component for "TextBanner" Slices.
 */
const TextBanner = ({ slice }: TextBannerProps): JSX.Element => {
  return (
    <div className="lg:py-16 py-12 lg:px-16 px-8 bg-[#544f4f] text-white text-center">
      <h1 className="font-lato lg:text-4xl text-3xl mb-4">{slice.primary.headline}</h1>
      <p className="font-open-sans lg:text-xl text-lg lg:max-w-3xl mx-auto">{slice.primary.description}</p>
      <button className="mt-8 bg-[#333333] hover:bg-[#ffdc00] hover:text-[#333333] text-[#ffdc00] py-2 px-8 rounded-sm font-open-sans">{slice.primary.button_text}</button>
    </div>  
  );
};

export default TextBanner;
