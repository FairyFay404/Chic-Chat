import React, { useState } from 'react'

export default function AddFriend({name,isFriend}) {
    const [valueisFriend, setValueisFriend] = useState(isFriend);
    

    const handleAddfriend = () => {
        setValueisFriend(true)
        // call API update isFriend with name(username)
    }


    return (
        <>
            <div className="w-[1053px] h-[77px] flex justify-between items-center border-b-2 border-b-[#2FBCE8]">
                <div className="flex flex-row justify-center items-center">
                    <img src="/Profile.png" className='ms-[38px] me-[25px] ' />
                    <h1 className='text-[20px] font-medium'>{name}</h1>
                </div>
                {/*status : not Friend */}
                <button className={` ${valueisFriend ? "hidden" : ""} flex flex-row justify-center items-center w-[55px] h-[40px] rounded-[50px] mr-[29px] bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] hover:border-[2px] hover:border-[#178AAE]`} onClick={handleAddfriend}>
                    <div className="text-[40px] text-white font-semibold  font-Montserrat">+</div>
                </button>
                {/*status : Friend already */}
                <button className={` ${valueisFriend ? "" : "hidden"} flex flex-row justify-center items-center w-[55px] h-[40px] rounded-[50px] mr-[29px] cursor-not-allowed bg-gradient-to-b from-[#696F79] via-[#696F79] to-[#C5DBE1]`}>
                    <div className="text-[40px] text-white font-semibold  font-Montserrat">+</div>
                </button>
            </div>
        </>
    )
}
