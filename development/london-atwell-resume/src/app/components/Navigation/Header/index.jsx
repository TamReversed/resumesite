import Image from "next/image";
import { routes } from "../schema/routes";
import Link from "next/link";
import Nav from "@/app/components/Navigation/Header/Nav"

export default function Index(){
    
    return(
        <div className="">
              <div className="flex  items-center  top-0 z-[1000] xl:justify-around lg:justify-around md:jusitfy-around justify-between w-full p-[6px]  bg-white border shadow-lg shadow-grey-8 rounded-xl border-grey-8">

    {/* logo */}
<div className="flex items-center justify-center w-10 h-10 overflow-hidden border rounded-lg object-fit border-grey-8">
  <Image src={"https://images.unsplash.com/photo-1536164261511-3a17e671d380?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHwxfDB8fHwy"} width={100} height={0} alt="" className="object-center object-fit"  priority="lazy" />
</div>
{/* navigation */}
<nav className="hidden lg:flex md:flex items-center xl:flex gap-x-2 xl:mx-[4.8rem] lg:mx-[9.8rem] md:mx-[2.5rem]">
    {routes.map((item,i)=>{
         const {name,href} = item;
         return(
            <Link key={i} href={href} className="px-[12px] py-[10px] capitalize font-medium rounded-lg transition-all bg-transparent duration-200 ease-in-out text-grey-60 hover:bg-secondary hover:text-grey-90" >
               {name} 
            </Link>
         )
    })}
    
</nav>

<div className="">
    <Nav />
    <Link href={"/#contact"} className="px-[16px]  items-center gap-x-2 py-[10px] bg-dark hover:bg-grey-90 rounded-xl text-white capitalize transition duration-200 hidden lg:flex md:flex xl:flex ">
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><script xmlns=""/>
<path d="M7.5 2.75C7.5 2.33579 7.16421 2 6.75 2C6.33579 2 6 2.33579 6 2.75V5.75C6 6.64648 6.67409 7.38552 7.54305 7.48789L6.52732 9.99292C6.11943 10.9988 6.16369 12.1753 6.64554 13.1355L10.6354 21.0866C10.9193 21.6524 11.4386 22 12 22C12.5614 22 13.0807 21.6524 13.3646 21.0866L17.3545 13.1355C17.8363 12.1753 17.8806 10.9988 17.4727 9.99292L16.4569 7.48789C17.3259 7.38552 18 6.64648 18 5.75V2.75C18 2.33579 17.6642 2 17.25 2C16.8358 2 16.5 2.33579 16.5 2.75V5.75C16.5 5.88807 16.3881 6 16.25 6H7.75C7.61193 6 7.5 5.88807 7.5 5.75V2.75ZM14.8432 7.5L16.0826 10.5566C16.3302 11.1672 16.2997 11.8929 16.0138 12.4628L12.75 18.9669V12.2993C13.1984 12.04 13.5 11.5552 13.5 11C13.5 10.1716 12.8284 9.5 12 9.5C11.1716 9.5 10.5 10.1716 10.5 11C10.5 11.5552 10.8016 12.04 11.25 12.2993V18.9669L7.98622 12.4628C7.70026 11.8929 7.66979 11.1672 7.91739 10.5566L9.15676 7.5H14.8432Z" />
<script xmlns=""/></svg></span>
        <span>contact me</span></Link>
</div>
        </div>
        </div>
      
    )
}