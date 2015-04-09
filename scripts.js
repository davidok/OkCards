/**
 * @author David Ok
 */

for (var i=0; i<guardianHeroinData.length; i++) {
	var rowData = guardianHeroinData[i];
	
		//$() tricking the system into thinking javascript is HTML
		// wrapping items affected by 'Read more' into new div, moreInfo
	var template = 	$( '<div class="quoteContainer">'+
					'<div class="mainQuote">'+rowData.mainQuote+'</div>'+
					'<div class="readMore">Read more</div>'+
					'<div class="moreInfo">'+ 
						'<div class="wholeQuote">'+rowData.wholeQuote+'</div>'+
						'<div class="source">'+rowData.source+'</div>'+
						'<div class="yearsClean">'+rowData.yearsClean+'</div>'+
						'<div class="location">'+rowData.location+'</div>'+
					'</div>'+	
					'</div>');
}
	template.find(".readMore").on("click", toggleContent);
	
	function toggleContent(e) {
		$quoteContainer = $(this).parent();
		
		if ($quoteContainer.hasClass("expanded")){ //quoteContainer has class .expanded (you can see content so you want to hide it)
			$quoteContainer.removeClass("expanded");
			
		}else{ //quoteContainer does not have class expanded (you can't see content so you want to open it)
		$quoteContainer.addClass("expanded");
			
		}
	}