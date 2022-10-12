import React from 'react'
import {stats} from '../constants/index'
import style from '../style'

const Stats = () => (
    <section className={`${style.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat)=>(
            <div key={stat.id} className={`flex flex-1 flex-row justify-start items-center m-3`}>
                <h4 className={`font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]  text-white`}> {stat.value}</h4>
                <p className={`font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]  text-gradient upper ml-3 `}>{stat.title}</p>
            </div>
            )
        )}
    </section>
)
export default Stats

{/* <h1 className={` font-poppins font-semibold ss:text-[68px] text-[41px] text-white ss:leading-[100px] leading-[75px]`}>
                    <span className="text-white"> 3800+</span>
                        <span className="text-gradient text-[21px]">User Active</span>
                        <span className="text-white"> 230+</span>
                        <span className="text-gradient text-[21px]">Trusted by Company</span>
                        <span className="text-white"> 230M+</span>
                        <span className="text-gradient text-[21px]">Transaction</span>
                    </h1> */}