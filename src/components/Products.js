import PropTypes from 'prop-types';
import React from 'react';
import ProductItem from './ProductItem';
import { PRODUCTS } from '../actions/types';

const Products = ({ filter }) => {
	const rows = PRODUCTS.filter(p => {
		const nameLC = p.name.toLowerCase();
		const filterLC = filter.toLowerCase();

		return nameLC.indexOf(filterLC) !== -1;
	}).map(p =>
		<ProductItem key={p.name} data={p} />
	);

	return <div>{rows}</div>;
};

Products.propTypes = {
	filter: PropTypes.string
};

export default Products;
