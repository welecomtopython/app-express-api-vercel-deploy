
import { useRef, useState } from "react";
import React from "react";
import { useCounter } from "../components/Context";


// import , { MouseEventHandler, ReactNode, } from 'react'


const File = (action: string) => {
 
  const [file, setfile] =useState('');
  setfile(action)
  console.log(action)

  return file
  
  
};

interface T{
  type :any,
  className?:any
}



export default function FilePacker(type:T) {
  const [file, setfile] =useState('');
  const { state, dispatch } = useCounter();

  console.log(state.porjectnew)
    
    switch (type.type) {
        case "file":
            return (
              <But_File className={type.className} />
            );
            break;
        case "folder":  
            return <But_Folder className={type.className} />;
            break;

        default:  
            break;
    }        
  
}  


function But_File({className}: any) {
  const { state, dispatch } = useCounter();

  return (
    <div className="">
      <button
        className={`${className} inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3`}
        onClick={() => {
          dispatch({ type: "new", data: "file" });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-4 h-4"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
        New File
      </button>
    </div>
  );
}


const But_Folder = ({className}: any) => {
  const { state, dispatch } = useCounter();

  return (
    <button
      className={`${className} inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3`}
      onClick={() => {
        dispatch({ type: "new", data: "folder" });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="w-4 h-4"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      New Folder
    </button>
  );
};