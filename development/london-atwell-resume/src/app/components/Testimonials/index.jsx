import { Trophy } from "lucide-react";
import { posts } from "./schema/posts";

export default function Index(){
    return(
        <div className="flex flex-col justify-between col-span-2 bg-white border rounded-xl border-grey-8" data-aos="zoom-in" data-aos-duration="500">
        <div className="flex flex-col border-b border-grey-10 p-[24px] " >
              <div className="flex flex-col items-center justify-center border rounded-lg w-14 h-14 bg-[#f6f6f6] border-grey-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M17.75 3C19.483 3 20.8992 4.35645 20.9949 6.06558L21 6.25V17.75C21 19.483 19.6435 20.8992 17.9344 20.9949L17.75 21H6.24999C4.51696 21 3.10075 19.6435 3.00514 17.9344L2.99999 17.75L2.99971 9.37208C3.23437 9.45505 3.48691 9.5002 3.74999 9.5002C4.01305 9.5002 4.26556 9.45506 4.5002 9.37211L4.49999 17.75C4.49999 18.6682 5.20711 19.4212 6.10647 19.4942L6.24999 19.5H17.75C18.6682 19.5 19.4212 18.7929 19.4942 17.8935L19.5 17.75V6.25C19.5 5.33183 18.7929 4.57881 17.8935 4.5058L17.75 4.5H6.24999C5.64982 4.5 5.12021 4.80213 4.80496 5.2626C4.49104 5.095 4.13161 5 3.74999 5C3.56877 5 3.39255 5.02142 3.22372 5.06188C3.67701 3.90899 4.76996 3.07762 6.06557 3.00514L6.24999 3H17.75ZM13.246 13.0031C13.6602 13.0031 13.996 13.3388 13.996 13.7531C13.996 14.1327 13.7139 14.4465 13.3478 14.4962L13.246 14.5031H8.74775C8.33354 14.5031 7.99775 14.1673 7.99775 13.7531C7.99775 13.3734 8.27991 13.0596 8.64598 13.0099L8.74775 13.0031H13.246ZM15.2522 9.49623C15.6664 9.49623 16.0022 9.83201 16.0022 10.2462C16.0022 10.6259 15.7201 10.9397 15.354 10.9894L15.2522 10.9962H8.74775C8.33354 10.9962 7.99775 10.6604 7.99775 10.2462C7.99775 9.86653 8.27991 9.55274 8.64598 9.50307L8.74775 9.49623H15.2522ZM3.74999 6C4.44041 6 5.0001 6.55969 5.0001 7.2501C5.0001 7.94051 4.44041 8.5002 3.74999 8.5002C3.05958 8.5002 2.49989 7.94051 2.49989 7.2501C2.49989 6.55969 3.05958 6 3.74999 6Z" fill="#8E8E92"/>
<script xmlns=""/></svg>
                  
              </div>
              <div className="mt-[48px] max-w-md">
              <h2 className="text-[24px] font-medium">Testimonials</h2>
              <p className="block [margin-block-start:1em] [margin-block-end: 1em] ms-0 me-0 text-grey-60 text-[14px]">Endorsements and testimonials highlighting professional aptitude and contributions from colleagues and partners.</p>
              </div>
          </div>
          <div className="flex flex-col gap-[40px] pt-[32px] pb-[40px] px-[24px]">
            {posts.map((post,i)=>{
              const {title,borderColor,author,published_At,content} = post;
              return(
                <div className={`border-l-2 `} key={i} style={{borderColor:`${borderColor}`}}>
                 <div className="ml-4">
                 <h3 className="my-0 text-base font-medium">{title}</h3>
                   {/* key info */}
                   <div className="flex text-grey-60 text-xs items-center gap-[6px]">
                   <div>{author}</div>
                                                {/* divider */}
                                                <div className="h-[2px] w-[2px] rounded-full bg-grey-50" />
                                                <div>{published_At}</div>
                    </div>
                    <p className="max-w-xl mt-[16px] text-xs text-grey-60">{content}</p>
                  </div>
                 
                  
                </div>
              )
            })}
            
            
          </div>

            

        </div>
    )
}