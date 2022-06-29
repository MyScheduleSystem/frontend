import { useState } from "react"
import MyIcon from "../../icon/myIcon"
import {
    Paper,
    BottomNavigation,
    BottomNavigationAction,
} from "@mui/material"

const SnsBottomNav = () => {
    const [selectedNav, setSelectedNav] = useState(0)

    const onChangeSelectedNavHandler = (e, newVal) => {
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
                onChange={onChangeSelectedNavHandler}
            >
                <BottomNavigationAction label="Recents" icon={<MyIcon name="history" />} />
                <BottomNavigationAction label="Favorites" icon={<MyIcon name="heart" />} />
                <BottomNavigationAction label="Archive" icon={<MyIcon name="archive" />} />
            </BottomNavigation>
        </Paper>
    )
}

const bottomStyle = {
    width: 500,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
}

export default SnsBottomNav