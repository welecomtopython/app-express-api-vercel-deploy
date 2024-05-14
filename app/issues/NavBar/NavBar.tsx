'use client';
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { it } from "node:test";
import { AiFillBug } from "react-icons/ai";
import "./styel.css";
import SVG from "@/app/components/SVG";
import classNames from "classnames";
import { usePathname } from "next/navigation";
export default function NavBar() {
  const path= usePathname()
  console.log(path)
  
  return (
    <div className="flex border-b-2 mt-1 h-11 mb-5 px-5 py-3 ">
      <Container>
        <Flex align="center" gap="5" className=" flex ">
          <NavLinks type={path} />
        </Flex>
      </Container>
      <nav></nav>
    </div>
  );
}

const NavLinks = ({type}:any) => {
  const navitem = [
    { name: "prodect", herf: "/issues/pages/prodect" },
    { name: "porject", herf: "/issues/pages/porject" },
    { name: "isuue", herf: "/issues/pages/isuue" },
  ];
  
  return (
    <>
      {navitem.map((item) => (
        <Link
          key={item.name}
          
          href={item.herf}
          className={`${class_name(item.name)} ${classNames({
            flex: true,
            "text-zinc-950 rounded ": item.herf == type,
            "text-zinc-400 before": item.herf !== type,
            "hover:text-zinc-950  rounded": true,
          })}`}
          // className={`${class_name(item.name)} ${
          //   item.herf === type
          //     ? "text-zinc-950 rounded bg-slate-300"
          //     : "text-zinc-400"
          // }   flex   hover:text-zinc-950 transition-colors  hover:bg-slate-300   rounded`}
        >
          <span className=" mr-3"> {item.name}</span>
          {<SVG type={item.name} />}
        </Link>
      ))}
    </>
  );
};

const class_name = (name: string) => {
  switch (name) {
    case "porject":
      return "porject";
      break;
      case "Prodect":
        return "Prodect";
        
        case "isuue":
          return "isuue";
        }
      };
  

