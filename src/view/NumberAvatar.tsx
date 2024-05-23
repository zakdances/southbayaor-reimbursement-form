import { Avatar } from "@mui/material"


const NumberAvatar = (props: any) => {

    return (
        <Avatar sx={{ 
            width: 28, 
            height: 28, 
            bgcolor: "primary.main", 
            color: "#fff", 
            }} aria-label="step label">
            {props.children}
        </Avatar>
    )
}

export default NumberAvatar;