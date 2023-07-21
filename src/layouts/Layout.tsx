import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styles from "../styles/main.module.css"

interface LayoutProps {
  children: JSX.Element;
}
const Layout = ({ children }: LayoutProps) => {

  const isOpen = useSelector((state: RootState)=> state.aside.open)

  return (
    <main className='h-screen md:flex-row flex-col'>
        <Navbar />
        {isOpen && <Sidebar />}
      <section className="flex h-full justify-center items-center">
        {children}
      </section>
    </main>
  );
};

export default Layout;
