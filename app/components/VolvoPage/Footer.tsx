'use client'
export default function footer(){
    return(
        <div className="flex flex-col gap-5 pb-16">
<button className="btn ">Add to calendar</button>
<button className="btn">Press kit</button>
<div className="flex justify-center gap-5 my-5">
    <button className="btn">F</button>
    <button className="btn">In</button>
</div>
<div className="text-center">
    Copyright &#169; 2023 Volvo Car Corporation <br /> (or its affiliates or licensors)
</div>
        </div>
    )
}