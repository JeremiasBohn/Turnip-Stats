#!/bin/bash
if [[ -n $TMPDIR ]]; then
	pathy=$TMPDIR
else
	pathy=/tmp
fi

tempscript=`mktemp $pathy/tempscript.XXXXXX` || exit 1

echo "library(rmarkdown); rmarkdown::render('TurnipStats.Rmd', 'html_document')" >> $tempscript
Rscript $tempscript
