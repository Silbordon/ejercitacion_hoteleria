import Banner from './Banner';
import { makeStyles } from "@material-ui/core/styles";
import { Button, CssBaseline, Grid } from "@mui/material";
import RoomCard from './RoomCard';
import DatePicker from './DatePicker';
import { useState } from 'react';
import mockData from '../mockData';


const Home = () => {
    const clases = useStyle()
    const [showDate, setShowDate] = useState(false)

    return (
        <div>
            <CssBaseline></CssBaseline>
            <div className={clases.root}>
                <div className={clases.dates}>
                    <Button onClick={() => setShowDate(!showDate)}>
                        {
                            showDate ? "Hide" : "Search Dates"
                        }
                    </Button>
                </div>
                {showDate && <DatePicker />}
                <Banner />
                
                <Grid container spacing={3} className={clases.section}>
                    {
                        mockData.map(({ src, title, description }, index) => (
                            <Grid item sm={6} md={4} lg={3}>
                            <RoomCard src={src} title={title} description={description} key={index} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>

    );
};



const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(2),
    },
    dates: {
        display: "flex",
        flexDirection: "column",
        "& button": {
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            color: "rgba(255, 103, 31, 0.4)",
            textTransform: "inherit",
            fontSize: "1.2rem",
            fontWeight: "bold",
        },
        "& button:hover": {
            backgroundColor: "rgba(255, 103, 31, 0.4)",
            color: "#fff",
        },
    },
    
}))
export default Home;