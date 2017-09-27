import React from 'react';
import * as styles from '../styles/app.scss';

const Header = () => {
	return (
		<header className={`${styles['t-center']}`}>
			<h1>React quiz</h1>
			<hr />
		</header>
	);
};

export default Header;
