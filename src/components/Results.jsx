import { Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@mui/material';
import accounting from 'accounting';

const Results = ({ src, title, description, price, stock }) => {
    const clases = useStyle()

    return (
        <Paper className={clases.root}>
            <div className={clases.left}>
                <img src={src} className={clases.image} alt={title}></img>
            </div>
            <div className={clases.rigth}>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body1">{description}</Typography>
                <Typography variant="body1">Price per night {"   "}
                    <span className={clases.number}>{accounting.formatMoney(price)}</span>
                </Typography>
                <Typography variant="body1">Rooms available {"   "}
                    <span className={clases.number}>{stock}</span>
                </Typography>
            </div>
        </Paper>
    );
};

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "flexStart",
        margin: theme.spacing(1),
    },

    rigth: {
        margin: theme.spacing(2,0,0,0),
    },
    left: {
        margin: theme.spacing(2, 5, 5, 5),
    },
    image: {
        maxWidth: "400px",
        height: "350px",
        borderRadius: "10px",
    },
    number: {
        fontWeight: "bold",
        marginLeft: theme.spacing(1),
        fontSize: "1.1rem"
    },



}))
export default Results;