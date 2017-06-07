# Calculate an average sentiment for several lines of text
Useful e.g. if you have hundreds of lines of textual customer feedback and want to know the customers' average feeling.

This bash script uses Google cloud's natural language processor to define the sentiment (positivity vs negativity) of a sentence. It automatically splits longer sentences with multiple opinions into smaller ones and calculates the average feeling for the entire opinion.

## USAGE
`./run.sh inputfile.csv`
where inputfile.csv is text that is parsed line by line and given to Google's natural language processor. inputfile.csv must be escaped for bash. Use the provided survey-small.csv for testing.

## EXPECTED RESULT
The average is 0.198538011695906 where negative numbers are negative feelings and positive are positive.

## HOW IT WORKS
The bash script calls `gcloud` which returns a JSON that is parsed by sentiment.js and multiplies the sentiment with its strength (magnitude * score). The bash script then calculates the average for these.

## REQUIREMENTS
- https://cloud.google.com/natural-language/docs/getting-started (which require python)
- nodejs
- perl

## HASHTAGS
ai,ml,machinelearning,naturallanguage,script,allthearchitectures,ffs
