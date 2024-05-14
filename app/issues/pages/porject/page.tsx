"use client"

import FilePacker from "../../../components/FilePacker";
import React, { useRef, useState } from "react";
import NavLeft from "./NavLeft";
import { useCounter } from "../../../components/Context";
import { Button, Box, Text, Card, Flex, Avatar, Inset, Strong } from "@radix-ui/themes";
import './styel.css';
import SVG from "../../../components/SVG";
import Layout2 from "../../infild";
export default function Diagram() {
  const { state, dispatch } = useCounter();
  
  return (
    <>
      <div className="flex h-screen w-full">
        <NavLeft />
        <div className="flex-1 p-4 overflow-auto  ">
          <div className="flex items-center justify-between mb-4 ">
            {/* {state.porjectnew === "file" && "folder"  ? <MyComponent /> : <Documents />} */}
            <MyHeader />
            <div className="flex items-center space-x-2">
              <FilePacker
                type="file"
                className=" 	visibility:  invisible:hidden  n-file"
              />
              <FilePacker type="folder" className={"n-file"} />
            </div>
          </div>
          <div className="   ">
            <ListG />
          </div>
        </div>
      </div>
    </>
  );
}

const MyHeader=()=>{
  const { state, dispatch } = useCounter();
if (state.porjectnew === "file" || state.porjectnew === "folder") {
  return <MyComponent />;
} else return <Documents />;

}


const Documents =()=>{
  return (
    <h3 className="text-lg font-semibold  dark:text-gray-700 ">Documents</h3>
  );
}


const handule =()=>{
  const { state, dispatch } = useCounter();
  
  console.log(state.porjectnew)
  
  dispatch({ type: "new", data: "ok" });
}

const MyComponent = () => {
  const { state, dispatch } = useCounter();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e:any) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    
      dispatch({ type: "new", data: "ok" });
    
    console.log("Input value:", inputValue);
    // Do something with the input value
  };

  return (
    <div className=" flex text-lg font-semibold  dark:text-gray-700 ">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="inp-file"
        placeholder={`New ${
          state.porjectnew.charAt(0).toUpperCase() + state.porjectnew.slice(1)
        }`}
        />
      <button className="but-ok" onClick={handleClick}>
        ok
      </button>
    </div>
  );
};


const ListG=()=>{
  return (
    <>
      <Box>
        <Card>
          <Flex gap="9" align="center">
            <SVG type="folder"/>
            <Box>
              <Text as="div" size="2" weight="bold">
                Teodros Girmay
              </Text>

              <Text as="div" size="2" color="gray">
                Engineering
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
      <Box>
        
      </Box>
    </>
  );}