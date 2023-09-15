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
      <img className="absolute top-0" src={backgroundImage} />
      <div className="relative container p-5 flex flex-col items-center top-16 justify-center mx-auto">
        <p className="text-[87px]">{title}</p>
        <p className="text-[33px]  py-5">{text}</p>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};
