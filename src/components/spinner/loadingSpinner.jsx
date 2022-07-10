import { Rings } from "react-loader-spinner"
import { Container } from "@mui/material"

const LoadingSpinner = () => {
    return (
        <Container sx={containerStyle}>
            <Rings color="#1976D2" height={100} width={100} />
        </Container>
    )
}

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    mt: 30,
}

export default LoadingSpinner
