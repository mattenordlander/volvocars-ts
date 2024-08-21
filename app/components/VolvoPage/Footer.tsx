'use client'

type footerProp = {
    footerCookie:string;
    state:string
}
export default function footer({footerCookie, state}:footerProp){
    return(
        <div className={`flex flex-col gap-5 pb-16 m-auto ${state === 'before' ? 'xl:w-9/12' : ''}`}>
<button className="btn ">Add to calendar</button>
<button className="btn">Press kit</button>
<div className="flex justify-center gap-5 my-5">
    <button className="btn">F</button>
    <button className="btn">In</button>
</div>
<div className="text-center">
    {footerCookie}
</div>
        </div>
    )
}