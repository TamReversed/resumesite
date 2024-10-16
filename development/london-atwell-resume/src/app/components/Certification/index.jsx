import { MoveUpRight } from "lucide-react";
import { certificates } from "./schema/certificates";

export default function Index(){
  
    return(
        <div className="flex flex-col justify-between col-span-2 bg-white border rounded-xl border-grey-8" data-aos="zoom-in" data-aos-duration="500">
        <div className="flex flex-col border-b border-grey-10 p-[24px] " >
              <div className="flex flex-col items-center justify-center border rounded-lg w-14 h-14 bg-[#f6f6f6] border-grey-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M2 5.75C2 4.23122 3.23122 3 4.75 3H19.25C20.7688 3 22 4.23122 22 5.75V15.25C22 16.7688 20.7688 18 19.25 18H10V17.0005C10.12 16.8408 10.2306 16.6737 10.3311 16.5H19.25C19.9404 16.5 20.5 15.9404 20.5 15.25V5.75C20.5 5.05964 19.9404 4.5 19.25 4.5H4.75C4.05964 4.5 3.5 5.05964 3.5 5.75V9.66891C2.91464 10.0075 2.40429 10.4614 2 10.9995V5.75ZM6.75 7C6.33579 7 6 7.33579 6 7.75C6 8.16421 6.33579 8.5 6.75 8.5H17.25C17.6642 8.5 18 8.16421 18 7.75C18 7.33579 17.6642 7 17.25 7H6.75ZM12.75 12C12.3358 12 12 12.3358 12 12.75C12 13.1642 12.3358 13.5 12.75 13.5H17.25C17.6642 13.5 18 13.1642 18 12.75C18 12.3358 17.6642 12 17.25 12H12.75ZM5.99967 10C3.79017 10 1.99902 11.7911 1.99902 14.0006C1.99902 16.2101 3.79017 18.0013 5.99967 18.0013C8.20916 18.0013 10.0003 16.2101 10.0003 14.0006C10.0003 11.7911 8.20916 10 5.99967 10ZM9.00076 18.001C8.16487 18.6291 7.12573 19.0013 5.99967 19.0013C4.8745 19.0013 3.83612 18.6297 3.00058 18.0025L3.0001 21.2487C3.0001 21.8195 3.6046 22.1681 4.09019 21.9176L4.17966 21.8635L6.00002 20.5912L7.81967 21.8635C8.28757 22.1904 8.91959 21.8946 8.99232 21.353L8.99923 21.2487L9.00076 18.001Z" fill="#8E8E92"/>
<script xmlns=""/></svg>
                  
              </div>
              <div className="mt-[48px] max-w-md">
              <h2 className="text-[24px] font-medium">Licenses & Certifications</h2>
              <p className="block [margin-block-start:1em] [margin-block-end: 1em] ms-0 me-0 text-grey-60 text-[14px]">Obtaining extra certifications is vital for furthering your career in the technology sector.</p>
              </div>
          </div>

          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-auto gap-x-[24px] gap-y-[40px] pt-[32px] px-[24px] pb-[40px]"> 
          {certificates.map((cert,i)=>{
            const {title,placement,date} = cert;
            return(
                <div className="flex flex-col items-start" key={i}>
                    {/* main info */}
                     {/* title,role,company */}
                     <div className="mb-[16px]">
                                            <h3 className="my-0 text-base font-medium">{title}</h3>
                                            {/* key info */}
                                            <div className="flex text-grey-60 text-xs items-center gap-[6px]">
                                                <div>{placement}</div>
                                                {/* divider */}
                                                <div className="h-[2px] w-[2px] rounded-full bg-grey-50" />
                                                <div>{"Issued"} {date}</div>
                                                
                                            </div>
                                        </div>
                                        <button className="xl:w-auto lg:w-auto md:w-auto w-full px-[16px] flex items-center justify-center gap-x-2 py-[10px] bg-grey-8 hover:bg-grey-10 rounded-xl text-dark capitalize transition duration-200">
                                            <span><MoveUpRight className="w-4 h-4" aria-hidden="true" /></span>
                                            <span>Show Credentials</span>
                                        </button>
                    
                </div>
            )
          })}
           
          </div>

            

        </div>
    )
}