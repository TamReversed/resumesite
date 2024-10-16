export default function Index(){
    const education = [
        {
            title:"Machine Learning, San Francisco, CA",
            type:"Diploma",
            subject:"Artificial Intelligence",
            from:"Sep 2018",
        to:"Jun 2022",
            
        },
        {
            title:"Bachelor of Science (B.S.) Computer Science",
            type:"Bachelor’s degree",
            subject:"Computer Science",
            from:"Sep 2015",
        to:"Dec 2016",
            
        },
       
    ]
    return(
        <div className="flex flex-col justify-between col-span-2 bg-white border rounded-xl border-grey-8" id="education" data-aos="zoom-in" data-aos-duration="500"> 
        <div className="flex flex-col border-b border-grey-10 p-[24px] " >
              <div className="flex flex-col items-center justify-center border rounded-lg w-14 h-14 bg-[#f6f6f6] border-grey-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M9.90878 3.69964C11.1832 2.88267 12.8168 2.88267 14.0912 3.69964L22.1548 8.86861C22.3689 9.0059 22.4989 9.24238 22.5 9.49677C22.5011 9.75116 22.3732 9.98876 22.1602 10.1279L19 12.1926V17.75C19 17.9122 18.9474 18.0701 18.85 18.2L18.8489 18.2014L18.8477 18.2031L18.8446 18.2071L18.8364 18.2178C18.8321 18.2233 18.8269 18.2298 18.8209 18.2373C18.8179 18.2411 18.8146 18.2452 18.8111 18.2495C18.7904 18.2751 18.7619 18.3095 18.7253 18.3513C18.6522 18.4348 18.5469 18.5483 18.4081 18.6816C18.1305 18.9481 17.7176 19.2948 17.1587 19.6387C16.0359 20.3297 14.3387 21 12 21C9.66127 21 7.96408 20.3297 6.8413 19.6387C6.2824 19.2948 5.86951 18.9481 5.59193 18.6816C5.45308 18.5483 5.34778 18.4348 5.27468 18.3513C5.23204 18.3025 5.1901 18.2531 5.15107 18.2014C5.14956 18.1994 5.15 18.2 5.15 18.2C5.05263 18.0701 5 17.9122 5 17.75V12.1926L3 10.8859V16.25C3 16.6642 2.66421 17 2.25 17C1.83579 17 1.5 16.6642 1.5 16.25V9.49997C1.5 9.22949 1.64318 8.99246 1.85788 8.86052L9.90878 3.69964ZM14.1194 15.3812C12.8317 16.2225 11.1683 16.2225 9.88058 15.3812L6.5 13.1725V17.4687C6.5368 17.5072 6.58034 17.5512 6.63073 17.5996C6.84143 17.8018 7.17072 18.0802 7.62745 18.3612C8.53592 18.9203 9.96373 19.5 12 19.5C14.0363 19.5 15.4641 18.9203 16.3726 18.3612C16.8293 18.0802 17.1586 17.8018 17.3693 17.5996C17.4197 17.5512 17.4632 17.5072 17.5 17.4687V13.1725L14.1194 15.3812ZM13.2817 4.96246C12.5006 4.46173 11.4994 4.46173 10.7183 4.96246L3.63041 9.506L10.701 14.1254C11.4902 14.6411 12.5098 14.6411 13.299 14.1254L20.3696 9.506L13.2817 4.96246Z" fill="#8E8E92"/>
<script xmlns=""/></svg>
                  
              </div>
              <div className="mt-[48px] max-w-md">
              <h2 className="text-[24px] font-medium">Education</h2>
              <p className="block [margin-block-start:1em] [margin-block-end: 1em] ms-0 me-0 text-grey-60 text-[14px]">Degrees and certifications in the specialized fields of software development and data analytics.</p>
              </div>
          </div>
          <div className="px-[24px] ">
            <div className="flex flex-col divide-y divide-grey-8">
                {education.map((item,i)=>{
                    const {title,subject,type,from,to} = item;
                    return(
                        <div key={i} className="flex flex-col items-start justify-between py-8 gap-y-4 lg:flex-row xl:flex-row">
                       <div>
                       <h1 className="text-[16px] font-medium">{title}</h1>
                        <div className="text-[12px] flex items-center text-grey-60 gap-x-2 mt-1">
                                            <h4>{type}</h4>
                                            <div className="h-[3px] w-[3px] rounded-full bg-grey-50"/>
                                            <h4>{subject}</h4>
                                        </div>
                        </div>

                                      <div>
                                      <div className="px-[12px] flex items-center gap-x-1 rounded-lg border border-grey-8 py-[6px]">
                                   <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[12px] w-[12px]" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM19.5 8.5H4.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V8.5ZM7.75 14.5C8.44036 14.5 9 15.0596 9 15.75C9 16.4404 8.44036 17 7.75 17C7.05964 17 6.5 16.4404 6.5 15.75C6.5 15.0596 7.05964 14.5 7.75 14.5ZM12 14.5C12.6904 14.5 13.25 15.0596 13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75C10.75 15.0596 11.3096 14.5 12 14.5ZM7.75 10.5C8.44036 10.5 9 11.0596 9 11.75C9 12.4404 8.44036 13 7.75 13C7.05964 13 6.5 12.4404 6.5 11.75C6.5 11.0596 7.05964 10.5 7.75 10.5ZM12 10.5C12.6904 10.5 13.25 11.0596 13.25 11.75C13.25 12.4404 12.6904 13 12 13C11.3096 13 10.75 12.4404 10.75 11.75C10.75 11.0596 11.3096 10.5 12 10.5ZM16.25 10.5C16.9404 10.5 17.5 11.0596 17.5 11.75C17.5 12.4404 16.9404 13 16.25 13C15.5596 13 15 12.4404 15 11.75C15 11.0596 15.5596 10.5 16.25 10.5ZM17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V7H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5Z" fill="#33333B"/>
<script xmlns=""/></svg>
                                    </span>
                                    <span className="flex text-[12px] gap-x-1">
                                        <time>{from}</time>
                                        <span>-</span>
                                        <time>{to}</time>
                                    </span>
                                    
                                   </div>
                                        </div>
                    </div>
                        
                    )
                })}
               
            </div>
            
            
          </div>
          </div>
    )
}