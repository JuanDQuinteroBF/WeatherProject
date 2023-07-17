import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  children: JSX.Element;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-screen md:flex-row flex-col">
      <Navbar />
      <section className="flex h-full w-full justify-center items-center">
        {children}
      </section>
    </main>
  );
};

export default Layout;
