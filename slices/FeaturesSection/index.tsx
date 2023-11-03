import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUniversity, faWifi, faBus } from '@fortawesome/free-solid-svg-icons';
import { Simplify } from "../../prismicio-types";


/**
 * Props for `FeaturesSection`.
 */
export type FeaturesSectionProps =
  SliceComponentProps<Content.FeaturesSectionSlice>;

const iconMapping = {
  home: faHome,
  university: faUniversity,
  wifi: faWifi,
  bus: faBus,
};

const Feature = ({ feature } : {feature: Simplify<Content.FeaturesSectionSliceDefaultItem>}) => {
  return (
      <div className="flex flex-col items-start p-12 border-r border-[#ffdc00] last:border-r-0">
          <FontAwesomeIcon icon={iconMapping[feature.icon!]} size="2x" className="mb-4 text-[#ffdc00]" />
          <h4 className="mb-4 font-bold text-lg font-lato text-[#333333]">{feature.title}</h4>
          <p className="font-openSans text-[#333333]">{feature.description}</p>
      </div>
  )
}

/**
 * Component for "FeaturesSection" Slices.
 */
const FeaturesSection = ({ slice }: FeaturesSectionProps): JSX.Element => {
  return (
    <section className="flex justify-around py-20 bg-white">
      {slice.items.map(feature => (
        <Feature key={feature.title} feature={feature} />
      ))}
    </section>
  );
};

export default FeaturesSection;
