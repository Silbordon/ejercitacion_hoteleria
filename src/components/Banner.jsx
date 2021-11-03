
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import background_image from '../imagenes/banner.jpeg';


const Banner = () => {
    const clases = useStyle()

    return (

        <div className={clases.root}>
            <div className={clases.info}>
                <Typography variant="h2">Plan your getaway....</Typography>
                <Link to="/search">
                    <Button variant="contained">Check our Rooms</Button>
                </Link>

            </div>

        </div>
    );
};



const useStyle = makeStyles((theme) => ({
    root: {
        height: "50vh",
        position: "relative",
        backgroundImage: `url(${background_image})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    },
    info: {
        backgroundColor: "black",
        color: "white",
        width: "350px",
        padding: theme.spacing(2),
        "& h2": {
            marginBottom: theme.spacing(4),
            fontWeight: "bolder"
        },
        "& button": {
            backgroundColor: "rgba(255,103,31)",
            color: "#fff",
            textTransform: "inherit",
            fontSize: "1.2 rem",
            fontWeight: "bold"
        },
        "& button:hover": {
            backgroundColor: "#fff",
            color: "rgba(255,103,31)"
        }
    }



}))

export default Banner;