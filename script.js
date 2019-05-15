const fs = require('fs');

fs.readFile('./hello.txt', (err,data) => {
	console.time('funchallenge')
	if (err) {
	console.log('errrrrroooorrrrr');
	}
	console.log('Async', data.toString('utf8'));
	console.timeEnd('funchallenge');
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

//readFile is suitable for most of the cases, 
//because readFile is synchronous


// APPEND
//fs.appendFile('./hello.txt', ' This is so cool!', err => {
 //if (err) {
 	//console.log(err)
 	//}
   //})

//sppendFile can add texts to the file

// WRITE

//fs.writeFile('bye.txt', 'Sad to see you go', err => {
	//if (err) {
		//console.log(err)
	//}
//})

//writeFile can create a file

// DELETE
//fs.unlink('./bye.txt', err => {
	//if (err) {
		//console.log(err)
	//}
	//console.log('Inception')
//