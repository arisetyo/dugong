#!/usr/bin/env node

/**
 * @author Arie M. Prasetyo
 */

const rl = require('readline');
const fs = require('fs').promises;;
const {prompt_sign, greeting_text} = require('./constants');

/**
 * container for filestream
 */
let s;

let step = 1;

// the questions to be asked for configurations
const questions = [0, 1, 2];
// answer placeholder
let configuration_values = [];

/**
 * command prompt interface
 */
const rli = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});

// write file main method
const writeFile = async content => {
  await fs.writeFile('dugong.conf', content, err => {
    if (err) throw err;
  });

  console.log('Berkas konfigurasi tersimpan');
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// initiate the app
console.log(greeting_text);

/**
 * main prompt function
 * @param {string} q the question asked to the user
 */
const prompt = q => rli.question(q, promptHandler);

/**
 * Prompt handler
 * @param {string} i input entered by user on the command prompt
 */
const promptHandler = async i => {
  // push input to configuration
  configuration_values.push(i);

  // exit the process if the instruction is `exit`
	if (step === questions.length)
	{
    // write file
    await writeFile(configuration_values.join(' '));

    // close process
    console.log('Proses selesai');
    rli.close();
		process.exit(0);
	}
	else 
	{
    step++;
		// -- const params = i.split(' ');
    // -- runCommand(params);

    // next step
		prompt(`${prompt_sign} step #${step}: `);
	}
};

// start the prompt
prompt(`${prompt_sign} step #${step}: `);

/*EOF*/