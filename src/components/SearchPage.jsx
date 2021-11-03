import { makeStyles } from "@material-ui/core/styles";
import HighlightOffTwoTone from "@material-ui/icons/HighlightOffTwoTone";
import { Chip, inputAdornmentClasses, Slider, Typography } from "@mui/material";
import { useState } from "react";
import mockData, { chips } from "../mockData";
import Results from "./Results";
import { useSelector } from "react-redux";
import { selectStart } from "../features/startSlice";
import { selectEnd } from "../features/endSlice";


const SearchPage = () => {
    const clases = useStyle();
    const[value, setValue] = useState(400)
    const start = useSelector(selectStart)
    const end = useSelector(selectEnd)



    const handleChange = (e, newValue)=>{
        setValue(newValue)
    }
    return (
        <div className={clases.root}>
            <Typography variant="h5" marginLeft="10px" gutterBottom>
                Available rooms
            </Typography>
            <div className={clases.chips}>
                {
                    chips.map((data) => {
                        let icon = <HighlightOffTwoTone></HighlightOffTwoTone>
                        return (
                            <Chip label={data.label}
                                key={data.key}
                                icon={icon}
                                className={clases.chip}
                            ></Chip>
                        )
                    })
                }

            </div>
            <div className={clases.selector}>
                <Typography gutterBottom>Prices</Typography>
                <Slider
                    value={value} 
                    onChange={handleChange} 
                    arial-labelledby="continuous-slider"
                    min={100}
                    max={400}
                    valueLabelDisplay="auto"
                    color="secondary"
                />
            </div>
            {mockData
            .filter((data)=> data.cat === "room")
            .filter((data)=> data.price < value)
            .filter((data) => end < data.notAvailablestart || start > data.notAvailableend)
            .map(({price, description, stock, src, title}, index) => (
                <Results
                    key={index}
                    title={title}
                    src={src}
                    description={description}
                    stock={stock}
                    price={price}
                ></Results>
            ))}

        </div>
    );
};



const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    chips: {
        padding: theme.spacing(1),
    },
    chip: {
        margin: theme.spacing(1),
    },
    selector: {
        width: "300px",
        marginLeft: theme.spacing(3),
    },

}))
export default SearchPage;