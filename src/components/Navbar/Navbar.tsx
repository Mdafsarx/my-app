"use client";
import Image from "next/image";
import Link from "next/link";
import brandLogo from "../../../public/images/brandIcon.png";
import brandLogoForSmallDevice from "../../../public/images/brandIcon_for_small_device.png";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const pathName = usePathname();
  const isActive = (routeName: string) => {
    return pathName === routeName;
  };

  console.log(pathName);

  return (
    <React.Fragment>
      <div className="flex items-center justify-between md:hidden p-5">
        <Link href={"/"}>
          <Image src={brandLogoForSmallDevice} alt="brand logo" />
        </Link>
        <FaBars className="text-xl" />
      </div>
      <div className="hidden md:flex items-center justify-center gap-28 font-medium py-4">
        {/* brand logo */}
        <Link href={"/"}>
          <Image src={brandLogo} alt="brand logo" />
        </Link>
        {/* pages link */}
        <nav>
          <ul className="flex items-center gap-16">
            <li>
              <Link
                href="/About"
                className={
                  isActive("/About")
                    ? "bg-white border border-[#6334E3] px-6 py-2 rounded-md"
                    : ""
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Solution"
                className={
                  isActive("/Solution")
                    ? "bg-white border border-[#6334E3] px-6 py-2 rounded-md"
                    : ""
                }
              >
                Solution
              </Link>
            </li>
            <li>
              <Link
                href="/Pricing"
                className={
                  isActive("/Pricing")
                    ? "bg-white border border-[#6334E3] px-6 py-2 rounded-md"
                    : ""
                }
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/Resources"
                className={
                  isActive("/Resources")
                    ? "bg-white border border-[#6334E3] px-6 py-2 rounded-md"
                    : ""
                }
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className={
                  isActive("/Contact")
                    ? "bg-white border border-[#6334E3] px-6 py-2 rounded-md"
                    : ""
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* SignIn and singUp */}
        <div className="flex items-center gap-8">
          <button className="text-[#6D39F9] ">Sing in</button>
          <button className="bg-[#6D39F9] text-white px-5 py-3 rounded-md">
            Sing Up
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
