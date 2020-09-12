/**
 * @author Arie M. Prasetyo
 */

const prompt_sign = '\x1b[36m>\x1b[0m ';

const greeting_text = 
	'\x1b[36m' +
	'* * * * * * * * * * * * * * * * * * * * * *\n' +
	'*  Selamat datang di inisialisasi Dugong  *\n' +
	'* * * * * * * * * * * * * * * * * * * * * *' + 
	'\x1b[0m\n';

// export this module
module.exports = {
  prompt_sign,
  greeting_text
};