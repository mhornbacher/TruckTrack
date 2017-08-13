import React from 'react';
import { connect } from 'react-redux';
// actions
import { logOut } from '../actions/login';
// Components
import { Route, Redirect, Switch } from 'react-router';
import DashNav from '../components/dashboard/DashNav';
// Styles
import '../styles/dashboard/index.css';

// SubContainers
import TrucksContainer from './TrucksContainer';
import RoutesContainer from './RoutesContainer';
import RouteContainer from './RouteContainer';

const TmpComponent = () => <h1>Coming Soon</h1>

const DashboardContainer = ({logged_in, logOut, match}) => {
  if(logged_in){
    return (
      <div className="page-dashboard">
        <DashNav logOut={logOut}/>
        <div className="dashboard container">
          <Switch>
            <Route path={match.url + "/trucks"} component={TrucksContainer}/>
            <Route exact path={match.url + "/routes"} component={RoutesContainer}/>
            <Route path={match.url + "/routes/:id"} component={RouteContainer}/>
            <Route path={match.url + "/drivers"} component={TmpComponent}/>
          </Switch>
        </div>
      </div>
    )
  } else {
    return <Redirect to="/login"/>
  }
}

function mapStateToProps(state, ownProps) {
  return {
    logged_in: state.login.logged_in,
  }
}

export default connect(mapStateToProps, { logOut })(DashboardContainer)