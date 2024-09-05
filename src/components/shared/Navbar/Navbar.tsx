import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { navItemsData } from "./navItemData";

const Navbar = () => {
  return (
    <>
      {/* header */}
      <header className=" sticky top-0 z-50 bg-white border-b border-t border-gray-300 py-[2px] shadow-sm">
        <div className="flex justify-between items-center container mx-auto xl:px-20 lg:px-16 md:px-10 px-4 py-3">
          <div className=" ">
            <Link href="/">
              <h2 className="text-3xl font-semibold ">Next CRUD App</h2>
            </Link>
          </div>
          <div>
            <nav className="lg:flex md:flex hidden flex-wrap">
              {navItemsData.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className=" text-md font-semibold  py-2 px-4 hover:text-white hover:bg-blue-500 rounded-md"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
