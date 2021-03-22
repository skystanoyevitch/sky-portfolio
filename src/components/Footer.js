import React from 'react'
import { RiInstagramFill } from "react-icons/ri"
import { SiDevDotTo } from "react-icons/si"
import { FaTwitterSquare } from "react-icons/fa"
import { AiTwotoneMail } from "react-icons/ai"

const Footer = () => {
    return (
        <div className={"flex p-4 w-screen justify-center"}>
            <div className={"flex text-xl space-x-9 mb-6"}>
                <RiInstagramFill size={50} />
                <SiDevDotTo size={50}/>
                <FaTwitterSquare size={50}/> 
                <AiTwotoneMail size={50}/>
            </div>
        </div>
    )
}

export default Footer