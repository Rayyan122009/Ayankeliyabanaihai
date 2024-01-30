"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { AiFillFolderAdd } from "react-icons/ai"
import { Foldercreate } from "./action"
  
  


const AlbumDialog = async ({Imagedata}:{Imagedata:string})=>{
    const [album , setalbum] = useState("")
    const [open , setopen] = useState(false)

    return(
        <div>
<Dialog open={open} onOpenChange={setopen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
        <AiFillFolderAdd className= "w-8 h-8 cursor-pointer text-white hover:text-red-600 duration-300"/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to album</DialogTitle>
          <DialogDescription>
            Enter the album for the picture you want to add in album . Click add to an album when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="album-name" className="text-right">
              Name
            </Label>
            <Input
              id="album-name"
              defaultValue={album}
              className="col-span-3"
              onChange={(e:any)=>{
                setalbum(e.target.value)
              }}
              placeholder="Album Name here"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={async ()=>{setopen(false)
           await Foldercreate(album,Imagedata)
        }} >Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

        </div>
        
        )
}
export default AlbumDialog