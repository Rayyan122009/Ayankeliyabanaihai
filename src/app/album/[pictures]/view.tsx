"use client"
import {BiEditAlt} from "react-icons/bi"
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import {AiOutlineHeart,AiFillHeart,AiFillFolderAdd} from 'react-icons/ai'
import { Addtag } from './action';
import Link from "next/link";
import { useState } from 'react';;

const View  = ({src,tag}:{src:string , tag:string[] })=>{
  const [fav,setfav] = useState(tag.includes("favourite"))
    return(
      <div className='relative'>
        <CldImage
        width="960"
        height="600"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
      {/* Heart icons */}
      <div className='absolute top-1'
      onClick={()=>{
        setfav(!fav);
        Addtag(src , fav)
      }}      
      >
        {
          fav ? (<AiFillHeart className="w-8 h-8 cursor-pointer text-red-500"/>) :
          (
            <AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-600 duration-300"/>
          )
        }
  
      </div>
      {/* Edit icons */}
      <div className="absolute top-1   right-1">
      <Link href={`/edit?publicId=${src}`}>
        <BiEditAlt className= "w-8 h-8 cursor-pointer text-white hover:text-red-600 duration-300"/>
        </Link>
      </div>
      </div>
    )
}

export default View