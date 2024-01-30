"use client"
import View from "../gallery/view";
import React, { useEffect } from "react";
import { Myimage } from "./page";
import { useState } from "react";

export default function FavouriteList({ resources }: { resources: Myimage[] }) {
    const [initialState, SetInitialState] = useState(resources)
    useEffect(()=>{
        SetInitialState(resources)
    },[resources])
    return (
        <div className=" columns-4 gap-4 space-y-4 mx-auto p-5">
            {initialState.map((item, i) => {
                return <div key={i} className=" break-inside-avoid">
                    <View src={item.public_id} tag={item.tags} fun={(public_id: string) => {
                        SetInitialState((current) => current.filter((val) => val.public_id !== public_id))
                    }} />
                </div>
            })}
        </div>
    )
}