"use client"
import { Menu } from "@headlessui/react";
import {  AlignJustify, X} from "lucide-react";
import { routes } from "../../schema/routes";
import Link from "next/link";

export default function Index(){
    return(
        <div className="flex xl:hidden lg:hidden md:hidden">
            <Menu>
                <Menu.Button className={"w-[40px] flex items-center gap-x-2 h-[40px] flex-col justify-center bg-dark hover:bg-grey-90 rounded-xl text-white capitalize transition duration-200 "}>
                    <AlignJustify className="w-6 h-6 ui-open:hidden" aria-hidden="true" />
                    <X className="hidden w-6 h-6 ui-open:flex" aria-hidden="true" />

                </Menu.Button>
                <Menu.Items className={"bg-white rounded-xl flex flex-col py-[14px] px-[12px] absolute w-full inset-x-0 mt-[3.2rem] opacity-0 transition-all ui-open:opacity-100 duration-200 border border-grey-8 shadow-lg shadow-grey-8"}>
                    {routes.map((item,i)=>{
                        const {name,href} =item;
                        return(
                            <Menu.Item key={i}>
                                <Link href={href} className="w-full capitalize py-[10px] px-[12px] text-grey-60">{name}</Link>
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </Menu>
            
        </div>
    )
}