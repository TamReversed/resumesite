import Image from "next/image"
import Link from "next/link"
export default function Index(){
    const socials = [
        {
            name:"",
            href:"",
            icon:((props)=>(
                <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24" fill="currentColor"><script xmlns=""/>
<path fillRule="evenodd" clipRule="evenodd" d="M19.7778 22H4.22222C2.99492 22 2 21.0051 2 19.7778V4.22222C2 2.99492 2.99492 2 4.22222 2H19.7778C21.0051 2 22 2.99492 22 4.22222V19.7778C22 21.0051 21.0051 22 19.7778 22ZM16.1234 19H19V13.0907C19 10.5904 17.5827 9.38152 15.603 9.38152C13.6224 9.38152 12.7889 10.9239 12.7889 10.9239V9.66667H10.0167V19H12.7889V14.1006C12.7889 12.7878 13.3932 12.0066 14.5498 12.0066C15.613 12.0066 16.1234 12.7573 16.1234 14.1006V19ZM5 6.72227C5 7.67337 5.76517 8.44454 6.70944 8.44454C7.65371 8.44454 8.41842 7.67337 8.41842 6.72227C8.41842 5.77117 7.65371 5 6.70944 5C5.76517 5 5 5.77117 5 6.72227ZM8.16868 19H5.27799V9.66667H8.16868V19Z" />
<script xmlns=""/></svg>
            ))
        },
        {
            name:"",
            href:"",
            icon:((props)=>(
                <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24" fill="currentColor"><script xmlns=""/>
                <path d="M22 12C22 6.47716 17.5228 1.99999 12 1.99999C6.47716 1.99999 2 6.47716 2 12C2 16.6898 5.2286 20.6249 9.58424 21.7055V15.0558H7.52216V12H9.58424V10.6832C9.58424 7.27956 11.1246 5.70196 14.4662 5.70196C15.0997 5.70196 16.1928 5.82616 16.64 5.9504V8.72056C16.404 8.69572 15.9941 8.68328 15.4848 8.68328C13.845 8.68328 13.2115 9.3044 13.2115 10.9193V12H16.4778L15.9167 15.0558H13.2115V21.9268C18.1629 21.3287 22 17.1127 22 12Z" />
                <script xmlns=""/></svg>
            ))
        },
        {
            name:"",
            href:"",
            icon:((props)=>(
                <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24" fill="currentColor"><script xmlns=""/>
                <path d="M17.8014 3H20.867L14.136 10.6384L22 21H15.8287L10.997 14.7033L5.46551 21H2.39987L9.53082 12.8303L2 3H8.32456L12.6898 8.75203L17.8014 3ZM16.7284 19.2066H18.4279L7.43152 4.72694H5.60546L16.7284 19.2066Z" />
                <script xmlns=""/></svg>
            ))
        },
        
    ]
    return(
        <div className="flex text-center w-full flex-col items-center justify-center pt-[88px] pb-[96px] gap-[40px]" data-aos="zoom-in" data-aos-duration="500">
            {/* logo */}
<div className="flex items-center justify-center w-[80px] h-[80px] overflow-hidden border rounded-lg object-fit border-grey-8">
  <Image src={"https://images.unsplash.com/photo-1536164261511-3a17e671d380?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHwxfDB8fHwy"} width={100} height={0} alt="" className="object-center object-fit" />
</div>
<div>
<h1 className="text-dark text-[21px] font-medium leading-[120%]">Feel Free to Reach Out</h1>
    <p className="mt-2 text-lg text-grey-60">Let&rsquo;s start a productive conversation</p>
</div>
<div className="flex items-center gap-x-4">
    {socials.map((item,i)=>(
        <Link href={item.href} key={i} className="opacity-90">
            <item.icon className="w-6 h-6 fill-grey-50 hover:fill-dark" target="_blank" aria-hidden="true" />
        </Link>
    ))}
</div>

        </div>
    )
}