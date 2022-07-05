import { useState } from "react"
import MyIcon from "../../icon/myIcon"
import {
    Paper,
    BottomNavigation,
    BottomNavigationAction,
} from "@mui/material"

const SnsBottomNav = () => {
    const [selectedNav, setSelectedNav] = useState(0)

    const onChangeSelectedNavEventHandler = (e, newVal) => {
        e.preventDefault()
        setSelectedNav(newVal)
    }

    return (
        <Paper
            sx={bottomStyle}
            elevation={3}
        >
            <BottomNavigation
                showLabels={true}
                value={selectedNav}
                onChange={onChangeSelectedNavEventHandler}
            >
                <BottomNavigationAction label="Recents" icon={<MyIcon name="history" />} />
                <BottomNavigationAction label="Favorites" icon={<MyIcon name="heart" />} />
                <BottomNavigationAction label="Archive" icon={<MyIcon name="archive" />} />
            </BottomNavigation>
        </Paper>
    )
}

const bottomStyle = {
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
}

export default SnsBottomNav