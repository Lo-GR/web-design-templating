import { motion } from 'framer-motion';

type HeroVideoProps = {
  youtubeId: string;
  title: string;
  text: string;
};

const titleVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  initial: {
    opacity: 0,
    y: 100,
  },
};

const textVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  initial: {
    opacity: 0,
    y: 100,
  },
};

export const HeroVideo = ({ youtubeId, title, text }: HeroVideoProps) => {
  return (
    <div className="overflow-hidden relative w-full">
      <div className="absolute isolate h-full w-full z-10 flex justify-center items-start left-1/4 flex-col">
        <motion.p
          variants={titleVariants}
          initial="initial"
          animate="visible"
          className="text-[40px] lg:text-[120px] text-white font-inter">
          {title}
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="initial"
          animate="visible"
          className="text-[20px] lg:text-[80px] text-white font-inter">
          {text}
        </motion.p>
      </div>
      <div className="z-3 frame-container">
        <iframe
          className="w-full absolute"
          height="300"
          src={`https://www.youtube.com/embed/${youtubeId}?si=bTIMQI34JuS9Nvx_?rel=0&loop=1&playlist=${youtubeId}&background=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1`}
          allow="autoplay"
          title="YouTube video player"
          allowFullScreen></iframe>
      </div>
      <div className="z-2 w-full absolute darken-image h-full" />
    </div>
  );
};
