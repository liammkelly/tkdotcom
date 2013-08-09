TalKellyCom = {};

$(window).load( function() {
	// set the height correctly when page loads
	setBodyHeight();

	// now re-set the body height on every resize
	$(window).resize(function(){
        setBodyHeight()
    });

    // LINKS
    $('#facebookLnk').click( function() {
    	window.open('http://www.facebook.com/TalKelly')
    })
    $('#twitterLnk').click( function() {
    	window.open('https://twitter.com/#!/talkelly')
    })
    $('#linkedinLnk').click( function() {
        window.open('http://www.linkedin.com/in/talkelly')
    })
    $('.resumeLnk').click( function() {
    	window.location = 'resume.cfm';
    })
    $('.aboutMeLnk').click( function() {
    	window.location = '/';
    })
    $('.portfolioLnk').click( function() {
    	window.location = 'portfolio.cfm';
    })
})

function vlog( strMsg ){
	try{
		if (window.console && window.console.log){
			console.log( strMsg );
		}
	} catch(err){}
}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        (new Image()).src = this;
    });
}
