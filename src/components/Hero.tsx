import { FC } from "react";
import { ChevronIcon, LogoColorIcon } from "./Icons";

const Hero: FC = () => {
  return (
    <section className="hero position-relative overflow-hidden py-5">
      <img
        src="https://www.labelleepoque-restaurant.fr/themes/labelleepoque_theme/images/interface/bg-mise-en-avant.jpg"
        alt="Hero Image"
        className="bg-image w-100 h-100 object-cover position-absolute top-0 start-0 z-n1"
      />
      <div className="hero-content text-center text-white p-4 ">
        <LogoColorIcon />
        <h1 className="title">La belle époque</h1>
        <div className="rotate-90">
          <ChevronIcon size={64} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
