import React from 'react';
import * as styles from '../styles/app.scss';

const Footer = () => {
	return (
		<footer className={`${styles['t-center']}`}>
			<hr />
			<h2>
				<a
					target="_blank"
					href="https://github.com/farhd/react-quiz">
					Github
				</a>
			</h2>
		</footer>
	);
};

export default Footer;
