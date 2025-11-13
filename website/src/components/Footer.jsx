import { LuFacebook, LuTwitter } from "react-icons/lu";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full  bg-black/40 backdrop-blur-lg text-white">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96 flex flex-col ">
          <a href="#">
            <img
              src="/images/mainlogo.jpg"
              className="w-[100px]  lg:w-[200px] rounded-xl"
            ></img></a>

          <div>
            <div className="w-full md:w-1/3  pl-3 p-3 flex flex-col ">
              <ul className="flex gap-4 pt-3">
                <li>
                  <a href="https://www.facebook.com/share/1A7YpngKka/" target="_blank"><LuFacebook className="text-2xl cursor-pointer hover:text-cyan-400 transition duration-500" /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zyntexait?igsh=MXNtdmR0ZmNsdjdsYg%3D%3D&utm_source=qr" target="_blank"><FaInstagram className="text-2xl cursor-pointer  hover:text-cyan-400 transition duration-500" /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/zyntexait/about/" target="_blank"><FaLinkedinIn className="text-2xl cursor-pointer  hover:text-cyan-400 transition duration-500" /></a>

                </li>
                <li>
                  <a href="https://www.tiktok.com/@zyntexait?_r=1&_t=ZS-91GR5DWecIp" target="_blank"><FaTiktok className="text-2xl cursor-pointer  hover:text-cyan-400 transition duration-500"></FaTiktok></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-cyan-400">Company</h2>
            <ul className="text-sm space-y-2">
              <li className="hover:text-cyan-200">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-cyan-200">
                <a href="#about">About us</a>
              </li>
              <li className="hover:text-cyan-200">
                <a href="#contact">Contact us</a>
              </li>

            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-cyan-400">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+94 76 108 8405</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@zyntexait.com" className="hover:text-cyan-200" target="_blank">
                info@zyntexait.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © <a href="#" className="text-cyan-400">ZyntexaIT</a>. All
        Right Reserved.
      </p>
    </footer>
  );
}
