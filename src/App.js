import React, {useEffect, useState} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Login from "./Components/Login";
import EmployeePrivateRoute from "./Components/EmployeePrivateRoute";
import NavigationBar from "./Components/Shared/NavigationBar";
import Profile from './Components/profile/Profile';
import Recharge from './Components/Recharge/RechargeContainer'
import TravelContainer from './Components/Travels/TravelContainer';
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, MuiThemeProvider, responsiveFontSizes} from "@material-ui/core/styles";
import {blue} from "@material-ui/core/colors";
import {compose} from "redux";
import {connect} from "react-redux";
import SnackBar from "./Components/Shared/SnackBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import "./App.css"


function App({location, snackBar, backdrop}) {
    const [currentPath, setCurrentPath] = useState(location.pathname);

    const navBarVisibility = () => {
        if (
            currentPath === "/home"
        ) {
            return false;
        }
        return true;
    };

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    const Theme = responsiveFontSizes(createMuiTheme({
        palette: {
            primary: blue,
            type: "light",
        },
    }));

    return (
        <MuiThemeProvider theme={Theme}>
            <CssBaseline/>
            {(navBarVisibility()) ? <NavigationBar/> : <div/>}

            {(snackBar.isShow)
                ? <SnackBar msg={snackBar.msg}/>
                : <React.Fragment/>
            }

            <Backdrop style={{zIndex: "2500"}} open={backdrop.isShow}>
                <CircularProgress style={{color: "#fff"}}/>
            </Backdrop>

            <Switch>
            <EmployeePrivateRoute exact path="/dashboard/profile">
                    <Profile/>
                </EmployeePrivateRoute>
            <EmployeePrivateRoute exact path="/dashboard/recharge">
                    <Recharge/>
            </EmployeePrivateRoute>
            <EmployeePrivateRoute exact path="/dashboard/history">
                    <TravelContainer/>
            </EmployeePrivateRoute>
             
                
                <Route exact path={"/home"} component={Login}/>
            </Switch>
        </MuiThemeProvider>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        backdrop: state.isShow,
        snackBar: state.snackBar,
    }
};

export default compose(
    connect(mapStateToProps),
    withRouter
)(App)
