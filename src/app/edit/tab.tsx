"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export function TabsDemo ({src}:{src:string}){
return(

<Tabs defaultValue="account" className="w-full  py-4 px-5">
  <TabsList  className="grid w-full grid-cols-4">
    <TabsTrigger value="original">original</TabsTrigger>
    <TabsTrigger value="blur">blur</TabsTrigger>
    <TabsTrigger value="gray">Gray Scale</TabsTrigger>
    <TabsTrigger value="oil">Oil Paint</TabsTrigger>

  </TabsList>

  {/* Original */}
  <TabsContent value="original">
  <div className="flex gap-7 items-center  justify-center py-4">
  <CldImage
  width="250"
  height="250"
  src={src}
  sizes="100vw"
  alt="Description of my image"
/>
<CldImage
  width="250"
  height="250"
  src={src}
  sizes="100vw"
  alt="Description of my image"
/>
  </div>
  </TabsContent>
  {/* Blur  */}
  <TabsContent value="blur">
  <div className="flex gap-7 items-center  justify-center py-4">
  <CldImage
  width="250"
  height="250"
  src={src}
  sizes="100vw"
  alt="Description of my image"
/>
<CldImage
  width="250"
  height="250"
  src={src}
  sizes="100vw"
  alt="Description of my image"
  blur={800}
/>
  </div>
  </TabsContent>
  {/* Gray scale */}
  <TabsContent value="gray">
  <div className="flex gap-7 items-center  justify-center py-4">
  <CldImage
  width="250"
  height="250"
  src={src}
  sizes="100vw"
  alt="Description of my image"
/>
<CldImage
  width="250"
  height="250"
  src={src}
  sizes="100vw"
  alt="Description of my image"
   grayscale={true}
/>
  </div>
  </TabsContent>
    {/* OIL PAINT*/}
    <TabsContent value="oil">
  <div className="flex gap-7 items-center  justify-center py-4">
  <CldImage
  width="250"
  height="250"
  src={src}
  sizes="100vw"
  alt="Description of my image"
/>
<CldImage
  width="250"
  height="250"
  src={src}
  sizes="100vw"
  alt="Description of my image"
   oilPaint={true}
/>
  </div>
  </TabsContent>
</Tabs>
)
}



























import { CldImage } from 'next-cloudinary';


export default function Tab() {
    return (
        <div className=" py-4 px-5 ">

        </div>
    )
}

{/* <CldImage
width="960"
height="600"
src="adaetnqk2weruqrrdiei"
sizes="100vw"
alt="Description of my image"
/> */}