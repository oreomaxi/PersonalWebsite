"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathName = usePathname();
  function getLinkItems() {}
  return (
    <>
      <nav className="w-full flex justify-between p-4 items-center shadow-md">
        <Link href={"/"}>
          <div className="bg-slate-400 p-2">logo</div>
        </Link>
        <div className="hidden sm:flex gap-5 justify-between items-center">
          <Link
            href={"/"}
            className={
              "bg-slate-400 p-2 rounded-lg" +
              (pathName === "/" ? " text-red-500 " : " text-gray-500 ")
            }
          >
            Home
          </Link>
          <Link
            href={"/blog"}
            className={
              "bg-slate-400 p-2 rounded-lg" +
              (pathName === "/blog" ? " text-red-500 " : " text-gray-500 ")
            }
          >
            Blog
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>pathname {pathName}</Link>
        </div>
      </nav>
    </>
  );
}
