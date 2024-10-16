import { Download, Mail } from "lucide-react";
import Link from "next/link";
export default function Index(){
    return(
        <div className="pt-[80px] flex flex-col items-stretch pb-[8px] ">
             <div className="flex flex-col items-center justify-center w-full leading-tight text-center gap-y-4">
            <div className="items-center bg-white border rounded-lg border-grey-8 py-[6px] px-[12px] flex gap-x-2">
            <span className="relative flex h-1.5 w-1.5">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ede7f] opacity-75"></span>
  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2ede7f]"></span>
</span>
                <span className="text-[12px]">Available for Work</span>

            </div>
            <div>
    <h1 className="text-dark xl:text-[48px] lg:text-[48px] md:text-[48px] text-[36px] font-medium leading-[120%]">London Atwell</h1>
    <p className="mt-2 text-lg text-grey-60">Senior Software Developer & IT Consultant</p>
</div>
<div className="flex flex-col items-center w-full xl:flex-row md:flex-row gap-x-4 gap-y-4 xl:justify-center md:justify-center lg:justify-center">
<button className="xl:w-auto lg:w-auto md:w-auto w-full px-[16px] flex items-center justify-center gap-x-2 py-[10px] bg-dark hover:bg-grey-90 rounded-xl text-white capitalize transition duration-200">
        <span><Mail  className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" /></span>
        <span>send email</span></button>
        <Link target="_blank" href={"/documents/London_Atwell_Resume-A4.pdf"}  className="xl:w-auto lg:w-auto md:w-auto w-full px-[16px] flex items-center justify-center gap-x-2 py-[10px] bg-grey-8 hover:bg-grey-10 rounded-xl text-dark capitalize transition duration-200">
        <span><Download  className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" /></span>
        <span>Download CV</span></Link>
</div>
        </div>
        </div>
       
    )
}