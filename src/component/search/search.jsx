import { Box, TextField } from "@mui/material"
const search = () => {
    return (
        <div className="ml-9 form-control w-64 text-white lg:block min-[360px]:hidden">
            <input type="text" placeholder="Search" className="input input-bordered border-white input-md text-lg bg-transparent " />
        </div>
    )
}

export default search