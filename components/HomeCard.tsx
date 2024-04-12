import React from 'react'
import Image from 'next/image'

interface HomeCardProps{
    src:string,
    alt:string,
    bg:string,
    h:string,
    p:string,
    handleClick:()=>void
}
const HomeCard = (props:HomeCardProps) => {
  return (
    <div
        className= {`${props.bg} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
        onClick={props.handleClick}
      >
        <div className="flex-center glassmorphism size-12 rounded-[12px]">
          <Image
            src={props.src}
            alt={props.alt}
            width={27}
            height={27}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{props.h}</h1>
          <p className="text-lg font-normal">{props.p}</p>
        </div>
      </div>
  )
}

export default HomeCard