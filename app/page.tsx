"use client";
import React from 'react'
import data from "./db.json";
import NavBar_Right from './components/NavBar-Right';
import { usePathname } from 'next/navigation';
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default function page() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   
  data.name; // => "bun"
  data.version; // => "1.0.0"
  
  return (
    <div>
      <NavBar_Right/>
      
    </div>
  );
}
console.log(page())
