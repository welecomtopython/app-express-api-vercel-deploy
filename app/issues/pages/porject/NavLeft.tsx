import { Button, DropdownMenu, Text,  } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react'
import data from './db.json'
import Sour from './sour';
import { boolean } from 'zod';
function NavLeft() {
  
  return (
    <>
      <div className="bg-gray-100  w-64 border-r border-gray-200 dark:border-gray-700 p-4 overflow-auto">
        <div className="flex flex-row j justify-between">
          <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-800">
            Directories
          </h3>
          <DropdownM />
        </div>
          {data.map((item)=>
            <Sour type={item.type} name={item.name} item={item.item}/>
          )}
      </div>
    </>
  );
}

export default NavLeft




 function DropdownM() {
  const [use,setuse]=useState('')
  useEffect(()=>{
    console.log(use)
  },[use])
  return (
    <div className='' onClick={()=> setuse("sdd")}>
      <DropdownMenu.Root >
        <DropdownMenu.Trigger>
          <Button variant="soft" color="indigo">
            Options
            <DropdownMenu.Trigger />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="soft" color="indigo">
          <DropdownMenu.Item shortcut="⌘ E" >Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
