import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";

const Footer = () => {
    const clases = useStyle()

    return (
        <div className={clases.root}>
            <Typography variant="subtitle1" gutterBottom>
                2021 Copyright by @CUTT/events
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Privacy . Term . Sitemap
            </Typography>
        </div>
    );
};


const useStyle = makeStyles((theme) => ({
 root:{
    borderTop:"1px solid #ccc",
    textAlign:"center",
    fontStyle:"italic",
    margin: theme.spacing(2),
    backgroundColor:"whitesmoke"
 },
}))


export default Footer;