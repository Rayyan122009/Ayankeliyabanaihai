import react from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FolderType } from "./page"




export default async function FolderList ({folder}:{folder:FolderType}){
    return(
        <div>
          <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Album Name</CardTitle>
        <CardDescription>Please click on the view now button to view the pictures present in album name</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button variant="outline">View</Button>
       
      </CardFooter>
    </Card>
        </div>
    )
}