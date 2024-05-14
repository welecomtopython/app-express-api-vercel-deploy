import { any } from "zod";
import data from "./db.json";

enum def{
  type=""
}
interface element {
  type?:string |any,
  not?:string|any,
  step?:string|any,
  code?:string|any,
  p?:string|any,
  error?:string|any,
  isuues?:string|any,
  description:string|any
}
export default function config( tbe:element){
  const config = {
    type:['isuue'],
  not:null,
  step:null,
  code:null,
  p:null,
  error:null,
  isuues:null,
  description:null

  };
  return tbe

  
 
}
const con = {
  type: null,
  not: null,
  step: null,
  code: null,
  p: null,
  error: null,
  isuues: null,
  description: null,
};
console.log(con)
