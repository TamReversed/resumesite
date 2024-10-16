import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Index(){
    const profile = "A flexible, diligent professional who strives to meet or surpass a company's standards in order to provide high-quality software solutions. Experienced in Java, JavaScript, Swift, SQL, Go, and Python. An effective listener who can convey technical knowledge in an intelligible manner."
    return(
        <section className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 xl:gap-x-[12px] lg:gap-x-[12px] md:grid-cols-3 md:gap-x-[12px] gap-y-[12px] pt-[88px]" id="profile">
            <div className="col-span-1 overflow-hidden border rounded-xl border-grey-8 xl:h-auto lg:h-auto md:h-auto h-[400px]" data-aos="zoom-in" data-aos-duration="500">
               <Image src={"https://images.unsplash.com/photo-1555435024-2c4d456b63be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2ZpbGV8ZW58MHwxfDB8fHwy"} width={400} height={0} alt="" className="object-cover object-center md:h-full"  priority="lazy"/>
            </div>
            <div className="flex flex-col justify-between col-span-2 p-[24px]  bg-white border rounded-xl border-grey-8" data-aos="zoom-in" data-aos-duration="500">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center justify-center border rounded-lg w-14 h-14 bg-[#f6f6f6] border-grey-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M11.3138 15.4992C11.4862 14.9657 11.7257 14.4624 12.0223 13.9992H5.25278C4.01076 13.9992 3.00391 15.0061 3.00391 16.2481V16.8258C3.00391 17.7185 3.32242 18.582 3.90219 19.2609C5.46849 21.0952 7.8545 22.0004 11.0004 22.0004C11.6003 22.0004 12.1726 21.9674 12.7169 21.9014C12.3259 21.4767 11.9906 20.9997 11.7229 20.4821C11.4883 20.4943 11.2475 20.5004 11.0004 20.5004C8.26206 20.5004 6.29618 19.7546 5.04287 18.2869C4.69502 17.8795 4.50391 17.3614 4.50391 16.8258V16.2481C4.50391 15.8345 4.83919 15.4992 5.25278 15.4992H11.3138ZM11.0004 2.00391C13.7618 2.00391 16.0004 4.24248 16.0004 7.00391C16.0004 9.76533 13.7618 12.0039 11.0004 12.0039C8.23894 12.0039 6.00036 9.76533 6.00036 7.00391C6.00036 4.24248 8.23894 2.00391 11.0004 2.00391ZM11.0004 3.50391C9.06737 3.50391 7.50036 5.07091 7.50036 7.00391C7.50036 8.9369 9.06737 10.5039 11.0004 10.5039C12.9334 10.5039 14.5004 8.9369 14.5004 7.00391C14.5004 5.07091 12.9334 3.50391 11.0004 3.50391ZM23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM18.0554 14.4206C17.8806 13.8598 17.1194 13.8598 16.9446 14.4206L16.3876 16.2077H14.5851C14.0194 16.2077 13.7842 16.9623 14.2418 17.3089L15.7001 18.4134L15.1431 20.2004C14.9683 20.7612 15.584 21.2276 16.0417 20.881L17.5 19.7766L18.9583 20.881C19.416 21.2276 20.0317 20.7612 19.8569 20.2004L19.2999 18.4134L20.7582 17.3089C21.2158 16.9623 20.9806 16.2077 20.4149 16.2077H18.6124L18.0554 14.4206Z" fill="#8E8E92"/>
<script xmlns=""/></svg>
                        
                    </div>
                    <div className="mt-[48px]">
                    <h2 className="text-[24px] font-medium">Professional Profile</h2>
                    <p className="block [margin-block-start:1em] [margin-block-end: 1em] ms-0 me-0 text-grey-60 text-[14px]">{profile}</p>
                    </div>
                </div>
                <div className="text-[12px] text-grey-50 flex gap-x-1.5 items-center pt-4">
                    <span>
                        <MapPin className="w-4 h-4" aria-hidden="true" strokeWidth={1.5}/>
                    </span>
                <span>Based in Phoenix, Arizona, USA.</span>
                </div>
            </div>
        </section>
    )
}