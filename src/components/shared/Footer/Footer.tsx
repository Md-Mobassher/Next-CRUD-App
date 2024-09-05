import Image from "next/image";
import Link from "next/link";
import { socialData } from "./SocialData";

const Footer = () => {
  return (
    <footer className=" border-t border-gray-300 lg:mt-12 md:mt-10 mt-10 mb-5 pt-5 pb-2 bg-slate-50">
      <div className="container mx-auto xl:px-20 lg:px-16 md:px-10 px-4 py-3">
        <div className="flex lg:flex-row md:flex-row flex-col  justify-between lg:items-start md:items-start items-center lg:gap-10 gap-2 ">
          <div>
            <Link href="/">
              <h2 className="text-3xl font-semibold lg:text-start md:text-start text-center ">
                Next CRUD App
              </h2>
            </Link>
            <p className="max-w-xl my-3 lg:text-start md:text-start text-center">
              A simple frontend application built with Next.js and TypeScript
              that demonstrates basic CRUD operations using the JSONPlaceholder
              API. Users can create, read, update, and delete posts in a clean,
              user-friendly interface.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-center">Contact Us</h3>
            <div className="flex flex-wrap mt-4 justify-center items-center">
              {socialData.map((item) => (
                <a
                  href={item.link}
                  key={item.title}
                  target={item.link.startsWith("http") ? "_blank" : ""}
                  rel={
                    item.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover filter grayscale transition duration-500 ease-in-out p-1 hover:grayscale-0"
                    width={50}
                    height={50}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="flex md:flex-row flex-col lg:gap-5 gap-2 items-center justify-between mt-5">
          <p className="text-center">
            Copyright &copy; {new Date().getFullYear()}. All right regerved to{" "}
            <Link
              href="/"
              className="text-slate-500 hover:text-blue-500 font-semibold"
            >
              Next CRUD App
            </Link>
          </p>
          <p className="text-center text-md">
            Design & Developed By{" "}
            <a
              href="https://mobassher.vercel.app"
              target="_blank"
              className="text-slate-500 hover:text-blue-500 font-semibold"
            >
              Md Mobassher Hossain
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
