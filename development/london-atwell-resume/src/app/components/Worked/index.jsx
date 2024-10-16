import Image from "next/image"

export default function Index(){
    const clients = [
        {
            src:"https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
        },
        {
            src:"https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
        },
        {
            src:"https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
        },
        {
            src:"https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
        },
        {
            src:"https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
        },
        
    ]
    return(
        <div className="bg-white border rounded-xl border-grey-8" data-aos="zoom-in" data-aos-duration="500"> 
            <div className="flex justify-center py-[24px] border-b item-center border-grey-10">
                <h2 className="capitalize text-grey-50">worked with</h2>
            </div>
            <div className="flex items-center justify-around py-4">
            <div className="">
      <div className="p-4">
        <div className="grid items-center max-w-lg grid-cols-4 mx-auto gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {clients.map((client,i)=>{
                const {src} = client;
                return(
                    <Image width={158} height={48} className="object-contain w-full col-span-2 max-h-12 lg:col-span-1 cursor-pointer opacity-[.5] hover:opacity-100" alt="" src={src} key={i}/>
                )
            })}
        </div>
      </div>
    </div>
            </div>
        </div>
    )
}