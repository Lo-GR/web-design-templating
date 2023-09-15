import { ReactNode } from "react";
import classNames from "classnames";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ className, children }: CardProps) => {
  return (
    <div className={classNames("bg-white p-12 rounded-2xl shadow ", className)}>
      {children}
    </div>
  );
};
