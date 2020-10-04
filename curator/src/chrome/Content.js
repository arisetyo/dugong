/**
 * content container
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import styles from './Content.css';

/**
 * Container component that holds the selected page by the navigation
 * @param {*} props 
 */
const Content = props => (
	<div className={styles.Content}>
		{props.children}
	</div>
);

export default Content;