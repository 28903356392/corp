"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Params =[
    {"name":"Performance","href":"/dashboard/performance"},
    {"name":"Reliability","href":"/dashboard/reliability"},
    {"name":"Scale","href":"/dashboard/scale"}
  ]
const ParamsHost=['/','/dashboard/performance',"/dashboard/reliability","/dashboard/scale"]
export default function Header() {
  const pageusePathName = usePathname()
 
  if(!ParamsHost.includes(pageusePathName))return null
  return (
     <div className="absolute w-full z-10">
       {/* link路由跳转 */}
       <div className="flex justify-between container mx-auto h-20 items-center">
        <Link href="/" className="text-3xl font-bold">Home</Link>
       <div className="flex justify-between w-1/5 ">
        {Params.map((item,i)=>{
          return <Link key={i} href={item.href} className={pageusePathName==item.href?"aqua":"black"}>{item.name}</Link>
        })}
      </div>
      </div>
        
      </div>
  )
}
