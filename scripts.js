/**
 * @author David Ok
 */

for (var i=0; i<guardianHeroinData.length; i++) {
	var rowData = guardianHeroinData[i];
	
		//$() tricking the system into thinking javascript is HTML
	var template = 	$( '<div class="quoteContainer">'+
					'<div class="mainQuote">'+rowData.mainQuote+'</div>'+
					'<div class="readMore">Read more</div>'+
					'<div class="wholeQuote">'+rowData.wholeQuote+'</div>'+
					'<div class="source">'+rowData.source+'</div>'+
					'<div class="yearsClean">'+rowData.yearsClean+'</div>'+
					'<div class="location">'+rowData.location+'</div>'+
					'</div>');
}
