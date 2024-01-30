import React from "react";
import Tab, { TabsDemo } from "./tab";

export default function Page ( { searchParams: { publicId } }:{ searchParams: { publicId: string} }){
     console.log(publicId)
    return(
        <>
            <div className=" py-4 px-5 ">
            <h2 className="text-3xl font-semibold tracking-tight">Edit Picture</h2>
        </div>
       <TabsDemo src={publicId} />
    </> 
       )
}
