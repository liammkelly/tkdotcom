$().ready( function() {

	setBodyHeight();

    // open Fancybox to show "why paper?"
    $('#box_whythis').fancybox({ padding : 2 });

    $('#whythis').click( function() {
        $('#box_whythis').trigger('click');
    })

    $('#emailLnk').click( function() {
        window.location.href = 'mailto:talkelly@gmail.com';
    })
    $('#wordLnk').click( function() {
        window.open('TalKellyResume.doc')
    })
    $('#pdfLnk').click( function() {
        window.open('TalKellyResume.pdf')
    })
    $('#linkedLnk').click( function() {
        window.open('http://www.linkedin.com/in/talkelly')
    })

})


function setBodyHeight() {
	var newHeight = 2437 * ( $(window).width() / 2000 );
	$('#header').height( newHeight * .04 );
	$('#mainArea').height( newHeight * .905 );
	$('#footer').height( newHeight * .055 );
}