import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner = ({ slice }: HeroBannerProps): JSX.Element => {
  return (
    <section className="bg-cover flex items-center justify-between bg-center h-screen py-16 px-4 md:px-12" style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}>
      <div className="bg-[#ffdc00] p-12 rounded-sm text-[#333333] max-w-md">
        <h1 className="text-4xl font-lato mb-4">{slice.primary.title}</h1>
        <p className="font-openSans text-lg mb-8">{slice.primary.description}</p>
        <button className="font-openSans bg-[#333333] text-[#ffdc00] rounded-sm px-2 py-4 text-center w-full">{slice.primary.button_text}</button>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};

export default HeroBanner;
