import { timeline } from "../Profile/schema/projects"

export default function Index(){
const experience = "Experienced in software development and consulting, bringing valuable insights and outcomes across industries."
    return(
        <div className="flex flex-col justify-between col-span-2 bg-white border rounded-xl border-grey-8" id="experience" data-aos="zoom-in" data-aos-duration="500">
              <div className="flex flex-col border-b border-grey-10 p-[24px] " >
                    <div className="flex flex-col items-center justify-center border rounded-lg w-14 h-14 bg-[#f6f6f6] border-grey-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M11.3138 15.4992C11.4862 14.9657 11.7257 14.4624 12.0223 13.9992H5.25278C4.01076 13.9992 3.00391 15.0061 3.00391 16.2481V16.8258C3.00391 17.7185 3.32242 18.582 3.90219 19.2609C5.46849 21.0952 7.8545 22.0004 11.0004 22.0004C11.6003 22.0004 12.1726 21.9674 12.7169 21.9014C12.3259 21.4767 11.9906 20.9997 11.7229 20.4821C11.4883 20.4943 11.2475 20.5004 11.0004 20.5004C8.26206 20.5004 6.29618 19.7546 5.04287 18.2869C4.69502 17.8795 4.50391 17.3614 4.50391 16.8258V16.2481C4.50391 15.8345 4.83919 15.4992 5.25278 15.4992H11.3138ZM11.0004 2.00391C13.7618 2.00391 16.0004 4.24248 16.0004 7.00391C16.0004 9.76533 13.7618 12.0039 11.0004 12.0039C8.23894 12.0039 6.00036 9.76533 6.00036 7.00391C6.00036 4.24248 8.23894 2.00391 11.0004 2.00391ZM11.0004 3.50391C9.06737 3.50391 7.50036 5.07091 7.50036 7.00391C7.50036 8.9369 9.06737 10.5039 11.0004 10.5039C12.9334 10.5039 14.5004 8.9369 14.5004 7.00391C14.5004 5.07091 12.9334 3.50391 11.0004 3.50391ZM23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM18.0554 14.4206C17.8806 13.8598 17.1194 13.8598 16.9446 14.4206L16.3876 16.2077H14.5851C14.0194 16.2077 13.7842 16.9623 14.2418 17.3089L15.7001 18.4134L15.1431 20.2004C14.9683 20.7612 15.584 21.2276 16.0417 20.881L17.5 19.7766L18.9583 20.881C19.416 21.2276 20.0317 20.7612 19.8569 20.2004L19.2999 18.4134L20.7582 17.3089C21.2158 16.9623 20.9806 16.2077 20.4149 16.2077H18.6124L18.0554 14.4206Z" fill="#8E8E92"/>
<script xmlns=""/></svg>
                        
                    </div>
                    <div className="mt-[48px] max-w-md">
                    <h2 className="text-[24px] font-medium">Work Experience</h2>
                    <p className="block [margin-block-start:1em] [margin-block-end: 1em] ms-0 me-0 text-grey-60 text-[14px]">{experience}</p>
                    </div>
                </div>
             <div className="flex flex-row py-[32px] px-[24px]">
                <div className="pt-[4px]">
                    <div className="w-[2px] h-full bg-[#f6f6f6]" />
                        
                  
                </div>
                <div className="flex flex-1 gap-[16px] flex-col">
                    {timeline.map((item,i)=>{
                        const {title,company,role,date,location,details} = item;
                        return(
                            <div key={i} className="flex  items-start gap-[24px]">
                                {/* ellipses */}
                                <div className="w-[10px] h-[10px] bg-white rounded-full items-center flex justify-center mt-[4px] -ml-[.35rem]" >
                                    <div className="h-[6px] w-[6px] bg-grey-50 rounded-full"/>
                                </div>
                                   {/* content info */}
                                <div className="flex flex-col gap-[16px] flex-1">
                                 {/* title and date */}
                                     <div className="flex xl:flex-row lg:flex-row flex-col justify-between md:flex-row items-start gap-[24px] w-full">
                                        {/* title,role,company */}
                                        <div className="">
                                            <h3 className="my-0 text-base font-medium">{title}</h3>
                                            {/* key info */}
                                            <div className="flex text-grey-60 text-xs items-center gap-[6px]">
                                                <div>{company}</div>
                                                {/* divider */}
                                                <div className="h-[2px] w-[2px] rounded-full bg-grey-50" />
                                                <div>{role}</div>
                                                
                                            </div>
                                        </div>
                                        <div className="border rounded-lg border-grey-8 py-[6px] px-[12px] items-center flex gap-[8px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[12px] w-[12px]" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM19.5 8.5H4.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V8.5ZM7.75 14.5C8.44036 14.5 9 15.0596 9 15.75C9 16.4404 8.44036 17 7.75 17C7.05964 17 6.5 16.4404 6.5 15.75C6.5 15.0596 7.05964 14.5 7.75 14.5ZM12 14.5C12.6904 14.5 13.25 15.0596 13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75C10.75 15.0596 11.3096 14.5 12 14.5ZM7.75 10.5C8.44036 10.5 9 11.0596 9 11.75C9 12.4404 8.44036 13 7.75 13C7.05964 13 6.5 12.4404 6.5 11.75C6.5 11.0596 7.05964 10.5 7.75 10.5ZM12 10.5C12.6904 10.5 13.25 11.0596 13.25 11.75C13.25 12.4404 12.6904 13 12 13C11.3096 13 10.75 12.4404 10.75 11.75C10.75 11.0596 11.3096 10.5 12 10.5ZM16.25 10.5C16.9404 10.5 17.5 11.0596 17.5 11.75C17.5 12.4404 16.9404 13 16.25 13C15.5596 13 15 12.4404 15 11.75C15 11.0596 15.5596 10.5 16.25 10.5ZM17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V7H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5Z" fill="#33333B"/>
<script xmlns=""/></svg>
<div className="text-xs text-dark">{date}</div>
                                        </div>
                                     </div >
                                     {/* location */}
                                     <div className="flex items-center gap-[6px]">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M5.84302 4.56831C9.24343 1.1679 14.7566 1.1679 18.157 4.56831C21.5574 7.96872 21.5574 13.4819 18.157 16.8823L16.97 18.0562C16.0951 18.9149 14.96 20.0188 13.5642 21.3684C12.6919 22.2117 11.3081 22.2116 10.436 21.3681L6.94489 17.9723C6.50612 17.5414 6.13886 17.1781 5.84302 16.8823C2.44261 13.4819 2.44261 7.96872 5.84302 4.56831ZM17.0963 5.62897C14.2817 2.81435 9.7183 2.81435 6.90368 5.62897C4.08905 8.4436 4.08905 13.007 6.90368 15.8216L8.39075 17.2891C9.20966 18.0905 10.2391 19.0909 11.4788 20.2899C11.7695 20.5711 12.2308 20.5711 12.5215 20.29L15.9164 16.9885C16.3854 16.5282 16.7787 16.1393 17.0963 15.8216C19.911 13.007 19.911 8.4436 17.0963 5.62897ZM12 7.99897C13.6577 7.99897 15.0016 9.34281 15.0016 11.0005C15.0016 12.6582 13.6577 14.0021 12 14.0021C10.3423 14.0021 8.99845 12.6582 8.99845 11.0005C8.99845 9.34281 10.3423 7.99897 12 7.99897ZM12 9.49897C11.1707 9.49897 10.4985 10.1712 10.4985 11.0005C10.4985 11.8298 11.1707 12.5021 12 12.5021C12.8293 12.5021 13.5016 11.8298 13.5016 11.0005C13.5016 10.1712 12.8293 9.49897 12 9.49897Z" fill="#8E8E92"/>
<script xmlns=""/></svg>
                                        <div className="text-xs text-grey-60">{location}</div>
                                     </div>
                                     {/* details */}
                                     <p className="max-w-[400px] text-xs text-grey-60">{details}</p>
                                    
                                </div>
                                
                                
                                 </div>
                        )
                    })}
                </div>
                
             </div>

        </div>
    )
}