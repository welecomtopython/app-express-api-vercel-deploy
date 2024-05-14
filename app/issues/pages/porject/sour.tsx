"use client";
import data from "./db.json";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

import { Button, DropdownMenu, Text } from "@radix-ui/themes";
import React, { useEffect, useState, useContext } from "react";
import SVG from "../../../components/SVG";
import { useCounter } from "../../../components/Context";
import Sour2 from "./sour2";

interface T {
  type: string;
  name: string;
  item?: any;
  viwo?: any;
}
type OP = {
  OPEN: string;
  CLOSE: string;
};

const OP: OP = {
  OPEN: "OPEN",
  CLOSE: "CLOSE",
};

export default function Sour(F: T) {
  const { state, dispatch } = useCounter();
  const [open, setopen] = useState<any>(true);

  const GetItem = (item: any) => {
    console.log(OP.OPEN);
    if (item) {
      dispatch({ type: "GoList", data: true });
      // console.log("state.GoList");
      setopen(false);
    }
    if (state.GoList) {
      dispatch({ type: "GoList", data: false });
      setopen(true);
      OP.OPEN = "OPEN";
    } else {
    }
  };

  return (
    <>
      <div>
        <div className="space-y-2">
          <div className="flex justify-between cursor-pointer hover:text-indigo-700  :bg-gray-200 rounded-md p-2">
            <div className="flex items-center space-x-2">
              <SVG type={F.type} />
            </div>
            <Text size="3" weight="bold">
              {F.name}
            </Text>
            <button
              className=" hover:bg-slate-700  rounded "
              onClick={() => {
                OP.OPEN = F.name;
                // setdir(F.name)

                GetItem(true);

                console.log(`IS Dir  : ${OP.OPEN}`);
              }}
            >
              {F.item && <IoChevr FlderItem={F.name} OPE={OP.OPEN} />}
            </button>
          </div>
        </div>
      </div>
      <div className=" flex-row justify-around cursor-pointer ml-8">
        {state.GoList === true ? (
          <Item
            name={F.name}
            type={F.type}
            item={F.item}
            viwo={OP.OPEN}
            wereviw={F.name}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
interface itemX extends T {
  wereviw: any;
}
const Item = (G: itemX) => {
  if (G.item) {
    if (G.viwo === G.name) {
      return (
        <div className="space-y-2 flex">
          <div className="flex-col justify-between cursor-pointer hover:text-indigo-700  :bg-gray-200 w-full ">
            
            {G.item.map((xitem:any)=>
               <Sour2 type={xitem.type} name={xitem.name} item={xitem.item} />
            )}
          </div>
        </div>
      );
    }
  } else {
    return null;
  }
};

type FO = {
  FlderItem: string;
  OPE: string;
};
function IoChevr(S: FO) {
  if (S.FlderItem === S.OPE) {
    return <IoChevronDown />;
  } else {
    return <IoChevronForward />;
  }
}

// function ToBool() {
//     const { state, dispatch } = useCounter();
//     const [list, setlist] = useState(false);
//     dispatch({ type: "GoList", data:true });

// }

export function sou({ props }: any) {
  return (
    <div>
      <h1> Welecom {props}</h1>
    </div>
  );
}
