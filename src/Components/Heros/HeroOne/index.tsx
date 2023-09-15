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
    <div className="relative">
      <img className="absolute top-0 object-cover" src={backgroundImage} />
      <div className="relative container p-5 flex flex-col items-center top-0 md:top-16 justify-center mx-auto">
        <p className="text-[20px] md:text-[40px] lg:text-[87px] text-white">
          {title}
        </p>
        <p className="text-[16px] md:text-[24px] lg:text-[33px]  py-5 text-white">
          {text}
        </p>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};
