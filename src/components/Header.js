import React , {useState,useEffect}from 'react'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import { AppBar, Collapse, CssBaseline, IconButton, Toolbar } from '@material-ui/core'
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/Header.css'
const useStyles=makeStyles((theme) => ({
    root: {
        display:"grid",
        placeItems:"center",
        height:"95vh",
        paddingTop:"20%"
       },
    appbar: {
     background:"none",
      fontFamily:"Grandstander"
    },
    icons:{
      color:"white",
      fontSize:"2rem"
    },
    logoText:{
        flexGrow:"1"
    },
    appbarContainer:{
        width:"98%",
        margin:"0 auto"
    },
    logoTextOrange:{
        color:"orange"
    },
    welcomText:{
        fontFamily:"Grandstander",
        color:"white"
    },
    arabicText:{
        fontFamily:"Lalezar",
        color:"white"
    },
    logoArabicTextColor:{
        fontFamily:"Lalezar",
        color:"orange"
    },
    upperTextDiv:{
        marginLeft:"14%"
    },
    downArrow:{
        
        fontSize:"4rem",
        color:"orange",
        
    },
    ArrowContainer:{
        display:"block",
        margin:"0 40%  auto auto"
    }

}))



function Header() {

    const classes=useStyles()
    const [checked,setChecked]=useState(false)
    useEffect(() => {
        setChecked(true)
    },[])
    return (
        <div className={classes.root}>
            
            <AppBar className={classes.appbar} elevation={2}>
             <Toolbar className={classes.appbarContainer}>
                <h1 className={classes.logoText} ><span className={classes.logoTextOrange} >Diag</span>.Nos</h1>
                <IconButton>
                   <FormatListBulletedRoundedIcon variant="round" className={classes.icons}/>
                </IconButton>
                </Toolbar>
            </AppBar>
            <div>
            <Collapse in={checked} {...(checked ? {timeout:2000}:{})} >
                <div className={classes.upperTextDiv}>
                <Typography  variant="h4" className={classes.arabicText}>كان كرهبتك عزيزة.
                  <span className={classes.logoArabicTextColor} >عليك</span>
                </Typography>
                </div>
                
                <div>
                
                <Typography variant="h3"className={classes.welcomText}> 
                <span className={classes.logoTextOrange} >{` Diag`}</span>
                  .Nos
                  <span  className="rotativeText" >{`tic`}</span>
                  <span className={classes.arabicText} >  {`شوف اقرب  `} </span>
                </Typography>
                </div>
                
                
                
                <div>
                    <IconButton className={classes.ArrowContainer} elevation={2}>
                     <ExpandMoreIcon className={classes.downArrow}/>
                    </IconButton>
                </div>
                </Collapse>
            </div>
            
        </div>
    )
}

export default Header
