/**
 * Module for Logs
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React, {useState} from 'react';
import styles from './Logs.css';

// PLACEHOLDER
const Logs = () => {
  const [result, setResult] = useState();

  const resultHandler = data => {
    if (result) return;
    setResult(data);
  }

  /**
	 * retrieve the logs from dispenser
	 */
  fetch('http://localhost:3000/api/v1/logs')
    .then(response => response.json())
    .then(resultHandler);

  return (
    <div className={styles.Logs}>
      Placeholder Logs
      {
        result && result.map(log => (
          <p key={log._id}>
            {`user ${log.userId} was doing '${log.activity}' on ${log.url}`}
          </p>
        ))
      }
    </div>
  );
};

export default Logs;