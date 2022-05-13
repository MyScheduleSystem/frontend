import { useState } from 'react'
import { 
    TextField,
} from "@mui/material";

// TODO: add delete, update

const CardModalItem = ({ content, index, updatedContent }) => {
    const [isDisable, setIsDisable] = useState(true)

    const onKeyDownHandler = (e) => {
        if(e.key !== "Enter") return
        if(!e.target.value) {
            setIsDisable(true)
            return
        }
        updatedContent(e.target.value)
        setIsDisable(true)
    }

    return (
        <TextField 
            sx={textFieldStyle}
            variant="filled"
            disabled={isDisable}
            onKeyDown={onKeyDownHandler}
            defaultValue={content}
        />
    )
}

const textFieldStyle = {
    width: '100%',
}

export default CardModalItem