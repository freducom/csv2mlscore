#!/bin/bash
echo "Starting awesomeness."

i=1
SUMRESULTS=0
while read p; do
	echo "$i Start"
	RESULT=`gcloud beta ml language analyze-sentiment --content="$p" | node sentiment.js`
	echo "$i End with result $RESULT"
	SUMRESULTS=$(perl -e "print $SUMRESULTS+$RESULT")
	i=$((i+1))
done <$1
AVERAGE=$(perl -e "print $SUMRESULTS/($i-1)")
echo "The average is $AVERAGE where negative numbers are negative feelings and positive are positive."
