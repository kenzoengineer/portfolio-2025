import { ReactNode } from "react";

interface BIconButtonProps {
  color: string;
  children: ReactNode;
  to: string;
}
const BIconButton = ({ color, children, to }: BIconButtonProps) => {
  return (
    <a
      href={to}
      target="_blank"
      className={`${color} h-12 w-12 flex items-center justify-center text-b-white hover:scale-110 transition-transform`}
    >
      {children}
    </a>
  );
};

export default BIconButton;
