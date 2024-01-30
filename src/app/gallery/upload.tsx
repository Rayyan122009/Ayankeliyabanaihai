"use client"

import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useRouter } from 'next/navigation';


interface UploadIMage{
    event:"success"
     info:{public_id:string}
  }

const Upload = ()=>{
    const router = useRouter()
    return(
        <Button asChild className='cursor-pointer'>
            <div>
        <CldUploadButton 
        uploadPreset="qttqghgj" 
        onUpload={(result)=>{
        let res = result as UploadIMage
        setTimeout(()=>{
            router.refresh()
        },1000)
        }} 
        />
        </div>
    </Button>
    )
}

export default Upload