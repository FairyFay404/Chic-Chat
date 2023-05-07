import React, { useState } from 'react'
import FriendRequire from './FriendRequire';

export default function FriendPopup(props) {
   
    return (props.trigger) ? (
        <>
            <div className=" h-full w-full top-0 left-0 bg-black/50 flex justify-center items-center absolute font-Rubik">
                <div className="relative w-[814px] h-[346px] rounded-[20px] bg-white">
                    <div className="flex justify-between items-center mx-[17px] my-[18px]">
                        <h1 className=' text-[35px] text-[#1565D8] font-semibold'>Friend requests</h1>
                        <button onClick={() => props.setTrigger(false)}><img src="close-icon.png" alt="" /></button>
                    </div>
                    <div className="w-full overflow-y-scroll flex flex-col items-center">
                        <div className="h-[254px] ">
                            <FriendRequire name={"Earn"}></FriendRequire>
                            <FriendRequire name={"Aom"}></FriendRequire>
                            <FriendRequire name={"Meaw"}></FriendRequire>
                        </div>
                        
                    </div> 
                </div>
            </div>
        </>
    ) : "";
}
