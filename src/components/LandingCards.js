import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles=makeStyles((theme) => ({
    root: {
        height:"40vh",
        display:"grid",
        placeItems:"start center"
    },
    buttons:{
        display:"block",
        color:"white",
        backgroundColor:"orange",
        textTransform:"none",
        fontFamily:"Nunito",
        fontWeight:"lighter",
        fontSize:"1rem",
      }
    
}))

function LandingCards() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            
                <Button className={classes.buttons}  variant="contained" >Chercher maintenant</Button>
            
        </div>
    )
}

export default LandingCards
