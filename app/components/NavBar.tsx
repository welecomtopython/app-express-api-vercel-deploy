"use client";

import { Skeleton } from "@/app/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import SinUp from "./SinUp";

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
       
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug />
            </Link>
            <NavLinks />
            <Input_serch/>
            <SinUp/>
          </Flex>
          
        
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classnames({
              "nav-link": true,
              "!text-zinc-900": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Input_serch=()=>{
  return(
   
    <div className="flex items-center rounded-mdborder-gray-300 px-3 py-2 focus-within:border-gray-800 focus-within:ring-1 focus-within:ring-gray-500 dark:border-gray-888 dark:focus-within:border-gray-400 dark:focus-within:ring-gray-400 w-full rounded">
      <SearchIcon className="h-5 w-5 text-gray-800 dark:text-gray-400" />
      <input
        className="  w-full rounded-md bg-transparent text-gray-900 placeholder:text-gray-500 focus:outline-none dark:text-gray-800 dark:placeholder:text-gray- rounded"
        placeholder="Search"
        type="search"
      />
    </div>
  )
}

function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
export default NavBar;
