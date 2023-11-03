import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SearchSection`.
 */
export type SearchSectionProps =
  SliceComponentProps<Content.SearchSectionSlice>;

/**
 * Component for "SearchSection" Slices.
 */
const SearchSection = ({ slice }: SearchSectionProps): JSX.Element => {
  return (
    <section className="bg-[#ffdc00] text-[#333333] text-center py-16 px-8">
      <h2 className="font-lato text-4xl mb-12">{slice.primary.title}</h2>
      <div className="bg-white p-4 rounded-sm shadow-sm flex justify-between items-center">
        <input
          type="search"
          placeholder={slice.primary.placeholder_text!}
          className="font-openSans bg-transparent outline-none w-4/5 text-[#333333]"
        />
        <button
          type="submit"
          className="bg-[#333333] text-[#ffdc00] rounded-sm px-3 py-1 font-openSans"
        >
          {slice.primary.button_text}
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
