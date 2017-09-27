import React from 'react';
import {
	Route,
} from 'react-router-dom';

import Main from './Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Result from '../components/Result';
import * as picnic from 'picnic';
import * as styles from '../styles/app.scss';

const App = () =>
	<div>
		<Header />

		<div className={`${picnic.flex} ${picnic['two-500']} ${picnic.center} ${styles['t-center']}`}>
			<Route exact path="/" component={Main} />
			<Route path="/result" component={Result} />
		</div>

		<Footer />
	</div>;

export default App;
