import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { makeStyles } from "@material-ui/core/styles";
import { Button, InputBase, Typography } from '@mui/material';
import { People } from "@material-ui/icons";
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectStart, setStart } from '../features/startSlice';
import { selectEnd, setEnd } from '../features/endSlice';




const DatePicker = () => {
    const clases = useStyle()
    const history = useHistory()
    const start = useSelector(selectStart);
    const end = useSelector(selectEnd);
    const dispatch = useDispatch();

    const selectionRange = {
        startDate: start,
        endDate: end,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        dispatch(setStart(ranges.selection.startDate.getTime()))
        dispatch(setEnd(ranges.selection.endDate.getTime()))
    }

    return (
        <div className={clases.root}>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <div className={clases.inputSection}>
                <Typography variant="h5">Number of Guest</Typography>
                <div className={clases.people}>
                    <InputBase placeholder="2 pax" className={clases.input}>
                    </InputBase>
                    <People />
                </div>
                <Button onClick={() => history.push("/search")}>
                    Search Rooms
                </Button>
            </div>
        </div>
    );
};





const useStyle = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: "20vh",
        left: "50vh",
        zIndex: "50",
        [theme.breakpoints.down("sm")]: {
            top: "25vh",
            left: "0"
        }

    },
    inputSection: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        "& h5": {
            textAlign: "center",
        },
        "& button:hover": {
            backgroundColor: "rgba(255,103,31,0.4)",
            color: "#fff",
        }
    },
    people: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "7vh",
        border: "1px solid #ccc",
        margin: theme.spacing(0, 2, 2, 0),
        padding: theme.spacing(1),
    },


}))

export default DatePicker;