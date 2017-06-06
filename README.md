 This bash script uses Google cloud's natural language processor to define the positivity vs negativity of a sentence using a node js script (sentiment.js) to parse the JSON reply and using python to calculate flotingpoint sum to get the average of several lines including text.

 USAGE:
 ./run.sh inputfile.csv

 where inputfile.csv is text that is parsed line by line and given to Google's natural language processor. inputfile.csv must be escaped for bash.

 EXPECTED RESULT:


 REQUIREMENTS:
 https://cloud.google.com/natural-language/docs/getting-started (which require python)
 nodejs
 perl
