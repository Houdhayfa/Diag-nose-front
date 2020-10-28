import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Header from './Header'
import LandingCards from './LandingCards'
const useStyles=makeStyles((theme) => ({
    root: {
        minHeight:"100vh",
        backgroundImage:`url(${process.env.PUBLIC_URL +'/resources/background_dark.jpg'})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    },
    cardsContainer:{
        display:"grid",
        placeItems:"center"
    },
    
}))


function LandingPage() {

const classes=useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <LandingCards/>
        </div>
    )
}

export default LandingPage
