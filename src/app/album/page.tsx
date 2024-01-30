import Cloudinary from "cloudinary"
import FolderList from "./folderlist"

export interface FolderType {
    name: string,
    path: string
}

export default async function Page() {
    const { folders } = (await Cloudinary.v2.api.root_folders()) as { folders: FolderType[]; };
    return (
        <>
            <div className=" py-4 px-5 ">
                <h2 className="text-3xl font-semibold tracking-tight">Picture album</h2>

            </div>
            <div className="px-5 py-4 grid grid-cols-3 gap-4">
                {folders.map((item, i) => (

                    <div key={i}>
                        <FolderList folder={item} />
                    </div>

                ))}

            </div>
        </>
    )
}

