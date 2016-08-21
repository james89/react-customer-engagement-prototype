import React from 'react';
import ReactDOM from 'react-dom';
import MainDashboard from './components/mainDashboard/main-dashboard.jsx';
import ChannelDashboard from './components/channelDashboard/channel-dashboard.jsx';
import ReactRouter from 'react-router';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';



class App extends React.Component {
	render(){
		return (
			<Router history={ hashHistory }>
   			<Route path='/' component={MainDashboard}></Route>
				<Route path='/channel' component={ChannelDashboard}></Route>
   		</Router>
		)
	}
}

export default App;
