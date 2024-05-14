
interface valu{
  path:string,
  usepath:string,
}
export const Vildition_style=(type:valu)=>{
 if(type.path === type.usepath){
  return " tex"
 }
}
