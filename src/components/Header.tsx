import {Github, Linkedin, Phone, User} from "lucide-react";

const Header = () => {
  return (
    <div className="sm:flex hidden items-center z-50 absolute   px-10 mx-16 top-0 left-0 right-0 justify-center h-[4.5rem] rounded-2xl my-6 md:fixed backdrop-blur-xl bg-white/10 border border-white/20 shadow-md">
      <div className="w-full flex justify-between items-center px-6">
        <div className="logo">
          <User
            className="text-white"
            size={26}
          />
        </div>
        <div className="links">
          <ul className="flex text-base gap-10 text-white/90 font-medium">
            <li className="hover:text-white transition">
              {" "}
              <a href="tel:+919408375902">
                <div className=" flex items-center text-end w-full">
                  <Phone />
                  <p className=" ml-3 text-sm">+91 9408375902</p>
                </div>
              </a>
            </li>
            <li className="hover:text-white transition">
              {" "}
              <a href="https://github.com/ImDhairya">
                <div className=" flex items-center text-end w-full">
                  <Github />
                  <p className=" ml-3 text-sm">GitHub</p>
                </div>
              </a>
            </li>
            <li className="hover:text-white transition">
              {" "}
              <a href="https://www.linkedin.com/in/dhairya-pandya-b31507228">
                <div className=" flex  items-center text-start w-full">
                  <Linkedin />
                  <p className=" ml-3 text-sm">LinkedIn</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
