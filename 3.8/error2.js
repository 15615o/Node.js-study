const fs = require('fs');

setInterval(() => {
	fs.unlink('./sbcdefg.js', (err) => {
		if (err) {
			console.log(err);
		}
	});
}, 1000);