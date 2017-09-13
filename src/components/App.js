import React from 'react';
import {
	Route,
	Link
} from 'react-router-dom';

import Header from '../containers/Header';
import Main from '../containers/Main';
import Footer from '../containers/Footer';
import Result from './Result';
const styles = require('../styles/app.scss');

const App = () =>
	<div>
		<Header />

		<div className="flex two-500 center t-center">
			<Route exact path="/" component={Main} />
			<Route path="/result" component={Result} />
		</div>

		<Footer />
	</div>;

export default App;
