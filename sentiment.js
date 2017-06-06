//Sums up magnitude and score variables from a JSON reply from https://cloud.google.com/natural-language/docs/reference/rest/v1beta2/Sentiment
//
//Usage example:
//cat test.json | node sentiment.js
//
//Special thanks to https://github.com/alump

var data = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  data += chunk;
});

process.stdin.on('end', function() {
	try {
		var json = JSON.parse(data);

		var magnitude = json.documentSentiment.magnitude;
		var score = json.documentSentiment.score;

		var sum = magnitude * score;

		process.stdout.write(sum.toFixed(2) + '\n');
		process.exit();
	} catch(e) {
		//console.error(e);
		process.stdout.write('0.0\n');
		process.exit(1);
	}
});
