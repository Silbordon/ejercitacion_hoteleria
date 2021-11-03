import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";

const RoomCard = ({ src, title, description }) => {
    const clases = useStyle()

    return (
        <div className={clases.root}>
            <figure className={clases.imageWraper}>
                <img className={clases.media} src={src} alt={title}></img>
            </figure>
            <Typography variant="h5" color="textPrimary">{title}</Typography>
            <Typography variant="h6" color="textSecundary">{description}</Typography>
        </div>
    );
};


const useStyle = makeStyles((theme) => ({
    root:{
        margin:theme.spacing(4,0,2,0),
        "& h5" :{
            margin: theme.spacing(2,0,0,0),
        },
        [theme.breakpoints.down("sm")]:{
            "& h6":{
                wordWrap:"break-word",
            }
        }
    },

    imageWraper:{
        overflow:"hidden",
    },

    media:{
        height:"400px",
        width:"600px",
        objectFit:"cover",
        transform:"scale(1.1)",
        WebkitTransform:"scale(1.1)",
        transition:".5s ease-in-out",
        WebkitTransition:".5s ease-in-out",
        "&:hover":{
            transform:"scale(1)",
            WebkitTransform:"scale(1)",
        }

        // [theme.breakpoints.down("xs")]:{
        //     height:"200px"
        // }
    
    }

}))
export default RoomCard;