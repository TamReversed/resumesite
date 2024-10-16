import { Check } from "lucide-react";
import { skills } from "./schema/skills";

export default function Index(){
    return(
        <div className="flex flex-col justify-between col-span-2 bg-white border rounded-xl border-grey-8" id="skills" data-aos="zoom-in" data-aos-duration="500">
        <div className="flex flex-col border-b border-grey-10 p-[24px] " >
              <div className="flex flex-col items-center justify-center border rounded-lg w-14 h-14 bg-[#f6f6f6] border-grey-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.2929 2.70708C11.6834 2.31655 12.3166 2.31655 12.7071 2.70708L15.677 5.67693C16.0675 6.06745 16.0675 6.70061 15.677 7.09114L12.7071 10.061C12.3166 10.4515 11.6834 10.4515 11.2929 10.061L8.32304 7.09114C7.93252 6.70062 7.93252 6.06745 8.32304 5.67693L11.2929 2.70708ZM9.73726 6.38403L12 4.12129L14.2627 6.38403L12 8.64677L9.73726 6.38403Z" fill="#8E8E92"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.2929 13.9371C11.6834 13.5465 12.3166 13.5465 12.7071 13.9371L15.677 16.9069C16.0675 17.2974 16.0675 17.9306 15.677 18.3211L12.7071 21.291C12.3166 21.6815 11.6834 21.6815 11.2929 21.291L8.32304 18.3211C7.93252 17.9306 7.93252 17.2974 8.32304 16.9069L11.2929 13.9371ZM9.73726 17.614L12 15.3513L14.2627 17.614L12 19.8768L9.73726 17.614Z" fill="#8E8E92"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.3271 8.30708C17.9366 7.91656 17.3034 7.91656 16.9129 8.30708L13.943 11.2769C13.5525 11.6675 13.5525 12.3006 13.943 12.6911L16.9129 15.661C17.3034 16.0515 17.9366 16.0515 18.3271 15.661L21.2969 12.6911C21.6875 12.3006 21.6875 11.6675 21.2969 11.2769L18.3271 8.30708ZM17.62 9.7213L15.3573 11.984L17.62 14.2468L19.8827 11.984L17.62 9.7213Z" fill="#8E8E92"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5.67693 8.30708C6.06745 7.91656 6.70062 7.91656 7.09114 8.30708L10.061 11.2769C10.4515 11.6675 10.4515 12.3006 10.061 12.6911L7.09114 15.661C6.70062 16.0515 6.06745 16.0515 5.67693 15.661L2.70708 12.6911C2.31655 12.3006 2.31655 11.6675 2.70708 11.2769L5.67693 8.30708ZM4.12129 11.984L6.38403 9.7213L8.64677 11.984L6.38403 14.2468L4.12129 11.984Z" fill="#8E8E92"/>
<script xmlns=""/></svg>
                  
              </div>
              <div className="mt-[48px] max-w-md">
              <h2 className="text-[24px] font-medium">Professional Skills</h2>
              <p className="block [margin-block-start:1em] [margin-block-end: 1em] ms-0 me-0 text-grey-60 text-[14px]">Key competencies essential for navigating and excelling in various professional contexts.</p>
              </div>
          </div>
          <div className="flex flex-col gap-[32px] pt-[32px] px-[24px] pb-[40px]">
            {skills.map((skill,i)=>{
                const {title,sets} = skill;
                return(
                    <div className="" key={i}> 
                    <h3 className="mb-[16px] capitalize text-base font-medium text-dark">{title}</h3>
                    <div className="flex flex-wrap items-start justify-start gap-x-[8px] gap-y-[6px]">
                        {sets.map((set)=>(
                            <div key={set} className="border rounded-lg border-grey-8 text-dark px-[12px] py-[6px] flex gap-x-[6px] bg-white text-xs">
                                <span><Check className="w-4 h-4" aria-hidden="true" /></span>
                                <span>{set}</span>
                                
                            </div>
                        ))}
                    </div>
                    
                </div>
                )
                
            })}
           
         
          </div>

            

        </div>
    )
}