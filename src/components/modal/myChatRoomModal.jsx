import React from "react"
import { Modal, Box } from "@mui/material"

const MyChatRoomModal = ({ isOpenModal, onClickCloseModalEvent }) => {
    const onClickCloseModalEventHandler = () => {
        onClickCloseModalEvent(false)
    }

    return (
        <Modal
            sx={modalStyle}
            open={isOpenModal}
            onClose={onClickCloseModalEventHandler}
        >
            <Box sx={boxStyle}>
                
            </Box>

        </Modal>
    )
}

const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
}

const boxStyle = {
    width: "70%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: "10px",
    opacity: "0.95",
    overflow: "auto",
}

export default MyChatRoomModal