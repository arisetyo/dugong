/**
 * navigation bar
 * @author: Arie M. Prasetyo (2020)
 */

import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styles from './Navigation.css';

/**
 * Navigation
 * Component that contains main menu bar
 */
const Navigation = () => {
	const location = useLocation();

	return (
		<div className={styles.Navigation}>
			<ul>
				<li className={location.pathname === '/' ? styles.selected : ''}>
					<Link to="/">Home</Link>
				</li>
				<li className={location.pathname === '/categories' ? styles.selected : ''}>
					<Link to="/categories">Categories</Link>
				</li>
				{/* <li className={location.pathname === '/categories' ? styles.selected : ''}>
					<Link to="/category/1">Category 1 (TEST)</Link>
				</li>
				<li className={location.pathname === '/categories' ? styles.selected : ''}>
					<Link to="/category/2">Category 2 (TEST)</Link>
				</li> */}
				<li className={location.pathname === '/logs' ? styles.selected : ''}>
					<Link to="/logs">Logs</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;