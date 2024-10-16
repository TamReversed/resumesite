import { Trophy } from "lucide-react";
import { awards } from "./schema/awards";

export default function Index(){
    return(
        <div className="flex flex-col justify-between col-span-2 bg-white border rounded-xl border-grey-8" data-aos="zoom-in" data-aos-duration="500">
        <div className="flex flex-col border-b border-grey-10 p-[24px] " >
              <div className="flex flex-col items-center justify-center border rounded-lg w-14 h-14 bg-[#f6f6f6] border-grey-8">
             <Trophy className="h-[24px] w-[24px] stroke-[#8E8E92]" aria-hidden="true" strokeWidth={1.5} />
                  
              </div>
              <div className="mt-[48px] max-w-md">
              <h2 className="text-[24px] font-medium">Honors & Awards</h2>
              <p className="block [margin-block-start:1em] [margin-block-end: 1em] ms-0 me-0 text-grey-60 text-[14px]">Acknowledgments for exceptional achievements and contributions in professional endeavors.</p>
              </div>
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-auto gap-x-[24px] gap-y-[40px] pt-[32px] px-[24px] pb-[40px]"> 
          {awards.map((item,i)=>{
          const {title,issued,distinct,date,details} = item;
          return(
            <div key={i} className="">
                 <div className="mb-[16px]">
                 <h3 className="my-0 text-base font-medium">{title}</h3>
                  {/* key info */}
                  <div className="flex text-grey-60 text-xs items-center gap-[6px]">
                    <div>{"Issued by"} {issued}</div>
                     {/* divider */}
                     <div className="h-[2px] w-[2px] rounded-full bg-grey-50" />
                     <div>{distinct}</div>
                    </div>
                   <div className="flex flex-col items-start mt-5 gap-y-4">
                   <p className="max-w-[400px]  text-xs text-grey-60">{details}</p>
                    <div className="border rounded-lg border-grey-8 py-[6px] px-[12px] items-center flex gap-[8px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[12px] w-[12px]" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM19.5 8.5H4.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V8.5ZM7.75 14.5C8.44036 14.5 9 15.0596 9 15.75C9 16.4404 8.44036 17 7.75 17C7.05964 17 6.5 16.4404 6.5 15.75C6.5 15.0596 7.05964 14.5 7.75 14.5ZM12 14.5C12.6904 14.5 13.25 15.0596 13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75C10.75 15.0596 11.3096 14.5 12 14.5ZM7.75 10.5C8.44036 10.5 9 11.0596 9 11.75C9 12.4404 8.44036 13 7.75 13C7.05964 13 6.5 12.4404 6.5 11.75C6.5 11.0596 7.05964 10.5 7.75 10.5ZM12 10.5C12.6904 10.5 13.25 11.0596 13.25 11.75C13.25 12.4404 12.6904 13 12 13C11.3096 13 10.75 12.4404 10.75 11.75C10.75 11.0596 11.3096 10.5 12 10.5ZM16.25 10.5C16.9404 10.5 17.5 11.0596 17.5 11.75C17.5 12.4404 16.9404 13 16.25 13C15.5596 13 15 12.4404 15 11.75C15 11.0596 15.5596 10.5 16.25 10.5ZM17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V7H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5Z" fill="#33333B"/>
<script xmlns=""/></svg>
<div className="text-xs text-dark">{date}</div>
                                        </div>
                                        </div>
                </div>
            </div>
          )
          })}
          
          </div>
            

        </div>
    )
}