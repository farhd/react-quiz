import React from 'react';
const styles = require('../../styles/app.scss');

const Footer = () => {
	return (
		<footer>
			<div className={styles.wrapper}>
				<p>
					<a target="_blank" href="https://github.com/farhd/react-quiz">Github</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
