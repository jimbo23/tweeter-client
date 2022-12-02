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
  const Icon = isLoading ? null : leftIcon; //TODO show a spinner when isLoading

  return (
    <button className="font-normal flex text-sm bg-blue-700 px-4 py-1 text-white rounded-sm hover:bg-blue-500 active:bg-blue-600 transition duration-250 ease-linear">
      {Icon && <Icon className="self-center mr-1" />}
      {children}
    </button>
  );
};
