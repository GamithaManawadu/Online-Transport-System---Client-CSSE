import React from "react";
import TravelTable from "./TravelTable";
import Backdrop from "@material-ui/core/Backdrop";
import {compose} from "redux";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import {firestoreConnect, isLoaded} from "react-redux-firebase";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {withRouter} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    }
}));


function TravelContainer(props) {
    const classes = useStyles();
    let {travels} = props;

    return (
        <React.Fragment>
            {(!isLoaded(travels))
                ? <Backdrop open={true}>
                    <CircularProgress style={{color: "#fff"}}/>
                </Backdrop>
                :
                <Container
                    maxWidth="lg"
                    style={{marginBottom: "50px", marginTop: "50px"}}
                >
                    <Grid container style={{marginTop: "50px"}} spacing={3}>
                        <Grid xs={12} item>
                            <Typography align={"center"} variant={"h4"} gutterBottom>
                               Travel History
                            </Typography>
                            <TravelTable travels={travels}/>
                        </Grid>
                        
                        
                    </Grid>

                </Container>
            }
        </React.Fragment>
    )
}

// Database connection
const mapStateToProps = (state) => {
    console.log(state)
    return {
        travels: state.firestore.ordered.Travels,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        return [
            {
                collection: 'Travels'
            }
        ]
    })
)(withRouter(TravelContainer))