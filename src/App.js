/**
 * Main application
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import styles from './App.css';
import {Tag, Button} from 'sudah_kudugong';

const App = () => (
  <div className={ styles.App }>

    <h1>Dugong framework</h1>

    <Tag>What a cool tag</Tag>

    <Tag><em>Awesome!</em></Tag>

    <Button disabled={true}>A disabled button</Button>

    <Button onClick={() => console.log('Howdy from another library!')}>A normal button</Button>
  
  </div>
);

export default App;