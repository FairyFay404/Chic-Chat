import React, { useState } from 'react'

export default function FriendRequire({name}) {
   
    return(
        <>
           <div className=" w-full h-[85px] ">
                <div className="w-[780px] border-t-2 border-t-[#2FBCE8] "></div>
                <div className="flex justify-between my-[12px] mx-[20px]">
                    <div className=" flex items-center">
                        <img src="/Profile.png" className='' />
                        <h1 className='ps-[25px] text-[20px] font-medium'>{name}</h1>
                    </div>
                    <div className=" grid grid-flow-col gap-2">
                        <button><img src="btn-yes.png"/></button>
                        <button><img src="btn-no.png" /></button>
                    </div>
                </div>
            </div>
        </>
    );
}
