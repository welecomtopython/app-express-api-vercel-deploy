"use client"
import React from "react";

import "./styel.css";
import Image from "next/image";
import CardeBox from "./CardeBox";
import { Grid } from "@radix-ui/themes";
export default function Porduect() {

const obh = [
  { label: "Flex: 1" },
  { label: "Flex 2" },
  { label: "Flex :3" },
    { label: "Flex: 4" },
    { label: "Flex: 5" },
    { label: "Flex: 6" },
    { label: "Flex: 7" },
    { label: "Flex: 7" },
    { label: "Flex: 7" },
  ];
  const imageStyle = {
  borderRadius: '5%',
  border: '1px solid #fff',
  
  }
  return (
    <div
      className=" pernt flex  flex-wrap  w-full  justify-start
           "
    >
      {obh.map((elem) => (
        // <div
        //   className="flex flex-col child  reuslt rounded shadow-md text-center p "
        //   key={elem.label}
        // >
        //   {/* <div className="ig h-3/4  border-b z-10"> */}
        //   <div>
           
           <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
            <CardeBox />
            <CardeBox />
            <CardeBox />
            <CardeBox />
            <CardeBox />
            <CardeBox />
                </Grid>
        //     {/* </div> */}
        //   </div>
        //   <div className="h h-1/4 bg- z-20"></div>
        // </div>
      ))}
    </div>
  );
}
