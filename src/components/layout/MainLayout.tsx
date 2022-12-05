import React from "react";
import { NavBar } from "./NavBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <NavBar />
    <div className="container mx-auto">{children}</div>
  </>
);
