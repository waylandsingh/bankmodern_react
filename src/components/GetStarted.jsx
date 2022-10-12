import React from 'react';
import {arrowUp} from '../assets';
import style from '../style'

const GetStarted = () => {
    return (
        <div className={`${style.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
            <div className={`${style.flexCenter} flex-col w-[100%] h-[100%] bg-primary rounded-full`}>
                <div className={`${style.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-18px leading-[23px] mr-2">
                        <span className="text-gradient">
                            Get
                        </span>
                    </p>
                    <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain"/>
                </div>
                <p className="font-poppins font-medium text-18px leading-[23px]">
                        <span className="text-gradient">
                            Started
                        </span>
                    </p>
                
                
            </div>
        </div>
    )
}

export default GetStarted
