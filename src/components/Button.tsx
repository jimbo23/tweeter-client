import { IconType } from "react-icons";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  leftIcon?: IconType;
  isLoading?: boolean;
}

export const Button = ({
  children,
  leftIcon,
  isLoading = false,
}: ButtonProps) => {
  //TODO: some loading icon when button is loading
  const Icon = isLoading ? null : leftIcon;

  return (
    <button className="font-normal flex text-sm bg-blue px-4 py-1 text-white rounded-sm hover:bg-red-800 active:bg-amber-300 transition duration-1000 ease-linear">
      {/** @ts-ignore */}
      <Icon className="self-center mr-1" />
      {children}
    </button>
  );
};
