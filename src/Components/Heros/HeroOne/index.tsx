import { Button } from '../../Buttons/ButtonOne';

type HeroProps = {
  title: string;
  text: string;
  buttonText: string;
  backgroundImage: string;
};

export const Hero = ({
  title,
  text,
  buttonText,
  backgroundImage,
}: HeroProps) => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <img className="absolute top-0 w-screen h-full" src={backgroundImage} />
      <div className="relative container p-5 flex flex-col items-center justify-center mx-auto h-full">
        <p className="text-[36px] md:text-[60px] lg:text-[87px] text-white">
          {title}
        </p>
        <p className="text-[16px] md:text-[24px] lg:text-[33px] py-2 md:py-5 text-white">
          {text}
        </p>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};
