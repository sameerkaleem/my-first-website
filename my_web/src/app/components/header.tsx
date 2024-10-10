"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png";


function Header() {
  return (
    <header className="flex justify-between">
      <div>
        <Image
          className="w-24 md:w-36 h-24 object-contain"
          src={logo}
          alt="logo"
        />
        
      </div>
      {/* {Links} */}
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href="/"> Home </Link>
          </li>
          <li>
            <Link href="../about"> About </Link>
          </li>

          <li>
            <Link href="/"> Contact </Link>
          </li>

          <li>
            <Link href="/"> JoinNow </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
