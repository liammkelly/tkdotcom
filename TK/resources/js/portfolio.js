var thumbsPath = '/TK/resources/images/PortfolioPieces/Thumbnails/';

TalKellyCom['clientSlides'] = {};
TalKellyCom['clients'] = [];
TalKellyCom['currClient'] = '';
TalKellyCom['thumbClick'] = 0;

$(function(){

	setBodyHeight();

    compat();


    
    // $("#carouselContent").hide();
    // $('#viewer').show();
    
    $.ajax({
        url         : '/TK/resources/js/slides.json'
        , dataType  : 'json'
        , success   : function(r) {
            var aData = r.data;
            for( var j = 0; j < aData.length; j++ ) {
                TalKellyCom['clientSlides'][ aData[j]['client'] ] = 0;
                TalKellyCom['clients'][ j ] = aData[j]['client'];
                var aClient = aData[j]['slides'];
                var currClient = aData[j]['client'];
                for( var i = 0; i < aClient.length; i++ ) {
                    var slide = $('<div/>').attr('id',currClient+'_'+i).addClass('viewerSlide');
                    var img = $('<img/>').attr('src', '/TK/resources/images/PortfolioPieces/NewPortfolioContentImages/'+aClient[i]['image']);
                    var label = $('<div/>').html( aClient[i]['text'] ).addClass('label');
                    slide.append( img );
                    slide.append( label );
                    $('#viewerArea').append( slide );
                    TalKellyCom['clientSlides'][ currClient ] += 1;
                }
            }
            $('#viewerArea').cycle({ 
                fx          : 'scrollHorz'
                , timeout   : 0 
                , speed     : 1000
                , next      : '#nextViewerBtn' 
                , prev      : '#prevViewerBtn' 
                , after     : function() {
                    var newclient = $(this).attr('id').split('_')[0];
                    var newThumbIndex = TalKellyCom.clients.indexOf( newclient );
                    var oldThumbIndex = TalKellyCom.clients.indexOf( TalKellyCom.currClient );
                    if( newThumbIndex !== oldThumbIndex && TalKellyCom.thumbClick === 0 ) {
                        if( newThumbIndex === 0 ) {
                            if( oldThumbIndex === ( TalKellyCom.clients.length - 1 ) ) {                                
                                slideThumbs('up');                            
                            } else {
                                slideThumbs('down');                                
                            }
                        } else if( newThumbIndex === ( TalKellyCom.clients.length - 1 ) ) {
                            if( oldThumbIndex === 0 ) {                                
                                slideThumbs('down');                            
                            } else {
                                slideThumbs('up');                                
                            }
                        } else if( TalKellyCom.clients.indexOf( TalKellyCom.currClient ) > newThumbIndex ) {
                            slideThumbs('down');
                        } else {
                            slideThumbs('up');
                        }
                    }
                    TalKellyCom.currClient = newclient;
                    shadeThumbs();
                    TalKellyCom.thumbClick = 0;
                }
            });
			var client = 'HBSHealth';
			TalKellyCom.portfolioPiece = client;
			TalKellyCom.currClient = client;
			jumpToClient( client );
			resetThumbs( client );
			$("#carouselContent").hide();
			$('#viewer').show();
			TalKellyCom.thumbClick = 0;    
        }
    })
    
    $('#thumbsDiv IMG').click( function() {
        TalKellyCom.thumbClick = 1;
        var client = $(this).data('client');
        TalKellyCom.currClient = client;
        var pos = $(this).css('top');
        switch(pos) {
            case "-119px":
                slideThumbs('down');
                jumpToClient( client );
                break;
            case "36px":
                console.log( 'do nothing' );
                jumpToClient( client );
                break;
            case "191px":
                slideThumbs('up');
                jumpToClient( client );
                break;
            // case "380px":
                // slideThumbs('up');
                // slideThumbs('up');
                // break;
        }
    })
    
    $('.fancybox').fancybox({ 
        padding         : 2 
        , nextEffect    : 'none'
        , prevEffect    : 'none'
        , nextClick     : false
        , mouseWheel	: false
    })

    $('#hideViewerBtn').click( function() {
        $("#carouselContent").show();
        $('#viewer').hide();
    })

	$('.cloudcarousel').click( function() {
        TalKellyCom.thumbClick = 1;
	    var client = $(this).data('client');
		TalKellyCom.portfolioPiece = client;
		TalKellyCom.currClient = client;
		jumpToClient( client );
        resetThumbs( client );
		$("#carouselContent").hide();
        $('#viewer').show();
        TalKellyCom.thumbClick = 0;
	})
    
	preload([
		// '/TK/resources/images/PortfolioPieces/FullImages/Countdown.gif'
		//, '/TK/resources/images/PortfolioPieces/FullImages/BlueVellum.jpg'
		//, '/TK/resources/images/PortfolioPieces/FullImages/BenZen.jpg'
		//, '/TK/resources/images/PortfolioPieces/FullImages/MiffiBlack.gif'
		//, '/TK/resources/images/PortfolioPieces/FullImages/PizzaHut.gif'
		//, '/TK/resources/images/PortfolioPieces/FullImages/DininginAnimBlack.gif'
		//, '/TK/resources/images/PortfolioPieces/FullImages/Luminaire.jpg'
		//, '/TK/resources/images/PortfolioPieces/FullImages/Germbook.jpg'
		//, '/TK/resources/images/PortfolioPieces/FullImages/Countdown.jpg'
	]);

    // open Fancybox to show "why all this?"
    $('#box_whywool').fancybox({
        padding         : 2 
    });
    $('#whywool').click( function() {
        $('#box_whywool').trigger('click');
    })
    
    $('.fancyboxscroll').fancybox({
        scrolling   : 'yes'
        , height    : 200
    })

})

$(window).load( function() {
	$.fancybox.close();
})

function compat() {
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
            "use strict";
            if (this == null) {
                throw new TypeError();
            }
            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = 0;
            if (arguments.length > 1) {
                n = Number(arguments[1]);
                if (n != n) { // shortcut for verifying if it's NaN
                    n = 0;
                } else if (n != 0 && n != Infinity && n != -Infinity) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
            }
            if (n >= len) {
                return -1;
            }
            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
            for (; k < len; k++) {
                if (k in t && t[k] === searchElement) {
                    return k;
                }
            }
            return -1;
        }
    }
}

function setBodyHeight() {
	var newHeight = 1180 * ( $(window).width() / 2000 );
	$('#header').height( newHeight * .076 );
	$('#mainArea').height( newHeight * .82 );
	$('#footer').height( newHeight * .104 );
}

function jumpToClient(client) {
    var clientPos = TalKellyCom.clients.indexOf( client );
    var counter = 0;
    for( var i = 0; i < clientPos; i++ ) {
        counter += TalKellyCom.clientSlides[ TalKellyCom.clients[i] ];
    }
    $('#viewerArea').cycle(counter);
}

function shadeThumbs() {
    $('#thumbsDiv IMG').each( function() {
        if( $(this).data('client') !== TalKellyCom.currClient ) {
            $(this).attr('src',thumbsPath + $(this).data('client') + 'B&W.jpg')
        } else {
            $(this).attr('src',thumbsPath + $(this).data('client') + '.jpg')            
        }
    })
}
function resetThumbs(client) {
    var clientPos = TalKellyCom.clients.indexOf( client ); 
    var thumbOffset = clientPos - 4;
    for( var i = 0; i < TalKellyCom.clients.length; i++ ) {
        var showClient = (thumbOffset + i);
        if( showClient < 0 ) {
            showClient += TalKellyCom.clients.length;
        } else if ( showClient >= TalKellyCom.clients.length ) {
            showClient -= TalKellyCom.clients.length;
        }
        $('#thumb_'+ (i+1) )
            .attr('src',thumbsPath + TalKellyCom.clients[ showClient ] + 'B&W.jpg')
            .data('client',TalKellyCom.clients[ showClient ]);
        if( TalKellyCom.clients[ showClient ] === client ) {
            $('#thumb_'+ (i+1) ).attr('src',thumbsPath + TalKellyCom.clients[ showClient ] + '.jpg')
        }
    }    
}

function slideThumbs(dir) {
    var complete = 0;
    if( dir === 'down' ) {
        operator = "+"
    } else {
        operator = "-"
    }
    $('#thumbsDiv IMG').animate({
        top: operator + '=155'
    }, 1000, function() {
        if( !complete ) {
            if( dir === 'down' ) {
                var tar = $('#thumbsDiv IMG').eq(9).attr('id');
                $('#'+tar).appendTo( $('#trash') );
                $('#'+tar).prependTo( $('#thumbsDiv') ); 
                setTimeout( function() {               
                    $('#'+tar).css('top','-584px');
                },100)
            } else {
                var tar = $('#thumbsDiv IMG').eq(0).attr('id');
                $('#'+tar).appendTo( $('#trash') );
                $('#'+tar).appendTo( $('#thumbsDiv') );
                setTimeout( function() {               
                    $('#'+tar).css('top','811px');
                },100)
            }
            complete++;
        }
    });        
}
