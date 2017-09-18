import React from 'react';
import {
	Route,
} from 'react-router-dom';

import Main from './Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Result from '../components/Result';
require('picnic');
require('../styles/app.scss');

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
