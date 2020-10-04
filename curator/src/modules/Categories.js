/**
 * Module for Categories
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './Categories.css';

// PLACEHOLDER
const Categories = () => {
  const {id} = useParams(); // selected category  id
  if (id) console.log(`selected category id: ${id}`);

  return (
    <div className={styles.Categories}>
      Placeholder Categories
    </div>
  )
};

export default Categories;