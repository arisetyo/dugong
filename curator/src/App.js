/**
 * Main application
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Content, Home, Navigation} from './chrome';
import {Categories, Logs} from './modules';
import styles from './App.css';

const App = () => (
	<Router>
		<div className={styles.App}>
			<Navigation/>
			<Content>
				<Route path="/" exact component={Home} />
				<Route path="/categories" exact component={Categories} />
				<Route path="/category/:id" component={Categories}/>
        <Route path="/logs" exact component={Logs} />
			</Content>
		</div>
	</Router>
);

export default App;