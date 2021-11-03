import { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import { Toolbar, InputBase, Typography, Avatar, IconButton } from "@mui/material";
import logo from "../imagenes/logo.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@mui/material/Drawer';
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";



const Header = () => {

    const [tablet, setTablet] = useState(true);
    const [draweropen, setDrawerOpen] = useState(false);
    const clases = useStyle()

    //solo se ejecuta useEfect cada vez que montamos el componente
    useEffect(() => {
        const responsiveness = () => window.innerWidth < 900 ? setTablet(true) : setTablet(false)
        responsiveness();
        //tambien cada vez que alguien redireccione la pantalla se ejecuta la funcion
        window.addEventListener("resize", () => responsiveness() )
    }, [])



    const displayTablet = () =>{
        const handleDrawerOpen= () =>{
            setDrawerOpen(true)
        }

        const handleDrawerClose= () =>{
            setDrawerOpen(false)
        }

        const headerData = ["My account", "Previus bookings", "Log out"]
        const getDrawerChoise= () =>{
            return headerData.map((data) => {
                return(
                    <List>
                        <ListItem>{data}</ListItem>
                    </List>
                )
            })
        }

        return(
            <Toolbar className={clases.toolbar}>
                <IconButton 
                    aria-haspopup="true"
                    aria-label="menu"
                    edge="start"
                    style={{color:"#ccc"}}
                    onClick={handleDrawerOpen}
                    >
                   <MenuIcon fontSize="large"></MenuIcon> 
                </IconButton> 
                <Drawer
                    anchor="left"
                    open= {draweropen}
                    onClose={handleDrawerClose}
                >
                    <div>{getDrawerChoise()}</div>
                </Drawer>
                <Link to="/">
                    <img src={logo} className={clases.logo} alt="logo"></img>
                </Link>
                <div className={clases.right}>
                    <Typography>Sign In</Typography>
                    <Avatar className={clases.avatar} />
                </div>
            </Toolbar>
        )
    }


    const displayDesktop = () => {
        return (
            <Toolbar className={clases.toolbar}>
                 <Link to="/">
                    <img src={logo} className={clases.logo} alt="logo"></img>
                </Link>
                <div className={clases.center}>
                    <InputBase fullWidth placeholder='Search here....' inputprops={{ className: clases.input }}>
                    </InputBase>
                    <SearchIcon></SearchIcon>
                </div>
                <div className={clases.right}>
                    <Typography>Sign In</Typography>
                    <Avatar className={clases.avatar} />
                </div>

            </Toolbar>
        )
    }



    return (
        <AppBar position="sticky" style={{ backgroundColor: "#fff", top: 0, zIndex: 99, width: "100%" }}>

            {
                tablet ? displayTablet() : displayDesktop()
            }
        </AppBar>
    )
};

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'sticky',
        top: 0,
        backgroundColor: "white",
        zIndex: 99,
        width: "100vw",
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    logo: {
        height: '70px',
        margin: theme.spacing(1, 0, 0, 2),
        objectFit: 'contain',
    },
    input: {
        fontSize: "1.2rem",
        padding: theme.spacing(1, 5, 1, 5),
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid lightgray',
        borderRadius: '999px',
        minWidth: '300px',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    right: {
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        margin: theme.spacing(2),
    },
    avatar: {
        margin: theme.spacing(2),
    },
}))


export default Header;