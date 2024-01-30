'use client'

import Image from 'next/image';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface UploadIMage{
  event:"success"
   info:{public_id:string}
}
export default function Home() {
  const [imageid , setImageId] = useState("cld-sample-4")
  return (

<main className='flex min-h-screen flex-col items-center justify-between p-24'>
<CldUploadButton 
uploadPreset="qttqghgj" 
onUpload={(result)=>{
let res = result as UploadIMage
setImageId(res.info.public_id)
}} 
/>

 
<CldImage
  width="960"
  height="600"
  src={imageid}
  sizes="100vw"
  alt="Description of my image"
/>
</main>
  )
}
