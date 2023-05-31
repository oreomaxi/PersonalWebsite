import Link from "next/link";
import React from "react";

export default function TopBar() {
  return (
    <>
      <nav className="w-full flex justify-between p-4 items-center shadow-md">
        <Link href={"/"}>
          <div className="bg-slate-400 p-2">logo</div>
        </Link>
        <div className="hidden sm:flex justify-between w-1/4 items-center">
          <Link href={"/"} className="bg-slate-400 p-2 rounded-lg">
            Home
          </Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
        </div>
      </nav>
    </>
  );
}
