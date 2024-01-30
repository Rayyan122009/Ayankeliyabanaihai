import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress"


export default function Loading (){
    return(
        <div>
           {/* <Progress value={33} /> */}
          <h1>Loading ...</h1>
        </div>
    )
}