import {
  motion,
  AnimationProps,
  VariantLabels,
  TargetAndTransition,
} from "framer-motion";
import { Tutor } from "@/types/tutor";

type Props = {
  tutor: Tutor;
  whileInView?: VariantLabels | TargetAndTransition;
  initial?: AnimationProps["initial"];
};

const TeamMember: React.FC<Props> = ({ tutor, whileInView, initial }) => {
  const { photo, name, bio, subject } = tutor;

  return (
    <motion.li
      // whileInView={whileInView}
      // initial={initial}
      initial={{
        y: -10,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      className="team-card max-w-[320px] bg-[#e9e1ff] ease-in-out shadow-lg rounded-lg overflow-hidden relative transition-all duration-300 transform"
    >
      <div className="inline-block overflow-hidden">
        <img
          src={`/${photo}`}
          alt={`${name}'s photo`}
          className="team-card-img object-cover"
        />
      </div>
      <div className="p-3 px-6 md:p-6 text-center">
        <h3 className="team-card-title text-lg leading-4 font-bold md:leading-5 md:text-xl mb-2 text-[#333]">
          {name}
        </h3>
        <p className="team-card-subject text-[#373a41] text-base leading-4 font-regular md:leading-5 md:text-base mb-2 md:mb-4">
          {subject}
        </p>
        <p className="team-card-bio text-sm leading-4 md:leading-5 md:text-base text-[#2b3036]">
          {bio}
        </p>
      </div>
    </motion.li>
  );
};

export default TeamMember;
