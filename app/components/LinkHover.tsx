import classNames from 'classnames';
import Link from 'next/link'
import React from 'react'
interface proptyLink{
    label:string,
    href:string,
    key?:any
    className?:string

    usepath?:()=> boolean

}
export default function LinkHover(type:proptyLink) {
  return (
    <div>
      <Link
        href={type.href}
        key={type.key}
        className={` ${classNames({
          flex: true,
          "text-zinc-950 rounded bg-slate-200 ": type.usepath ? true : false,
        //   "text-zinc-400 before": type.usepath ? false : true,
          "hover:text-zinc-950 hover:bg-slate-200 rounded": true,
        })}`}
      >
        {type.label}
      </Link>
    </div>
  );
}
