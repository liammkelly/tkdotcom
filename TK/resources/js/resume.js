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

	$('#sendMessage').click( function() {
		$.ajax({
			url: '/TK/ContactForm.cfm',
			data: $('#contactForm').serialize(),
			error: function(r) {
				console.log('error!',r)
			},
			success: function(r) {
				console.log('success!',r)
			}
		});
	})

})


function setBodyHeight() {
	var newHeight = 989 * ( $(window).width() / 1100 );
	$('#header').height( newHeight * .05 );
	$('#mainArea').height( newHeight * .870 );
	$('#footer').height( newHeight * .08 );
}