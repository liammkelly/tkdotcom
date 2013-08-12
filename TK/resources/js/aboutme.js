TalKellyCom.isDewDropAnimated = false;
TalKellyCom.isStartPreload = '';
TalKellyCom.overlayLength = 6500;

$(window).load(function() {
	console.log( "load", $('#footer').height() )
});

$().ready( function() {

	console.log( "ready", $('#footer').height() )

	/*
	
	$('<div/>')
		.attr('id','loadoverlay')
		.addClass('introBG')
		.css({
			//'backgroundColor'	: '#FFF'
			'z-index'			: '10'
			, 'position'		: 'fixed' 
 	   		, 'top'				: 0
    		, 'left'			: 0
    		, 'width'			: '100%'
    		, 'height'			: '100%'
    	})
		//.width( wwidth )
		//.height( wheight )
		.prependTo('body');

	$.ajax({
		url		  : '/TK/resources/images/FinalIntroDrop.gif'
		, success : function() {
			$('<div/>')
				.attr('id','overlayimg')
				.css({
					'margin'			: '5% auto 0'
					, 'background'		: 'url(/TK/resources/images/FinalIntroDrop.gif)'
					, 'z-index'			: '20'
					, 'width'			: '300px'
					, 'height' 			: '414px'
				})
				//.addClass('introThanks')
				.appendTo('#loadoverlay');
			window.setTimeout( function() {
				var today = new Date();
				var expire = new Date();
				expire.setTime(today.getTime() + 3600000*24*365);
				document.cookie = "tkVisitor=1;expires="+expire.toGMTString();
				$('#loadoverlay').fadeOut(1000);
			},TalKellyCom.overlayLength);			
		}
	});

	*/

	TalKellyCom.isStartPreload = new Date();

	preload([
		"/TK/resources/images/NavButtons/ButtonWhiteAboutMe.jpg"
		, "/TK/resources/images/NavButtons/ButtonWhitePortfolioMe.jpg"
		, "/TK/resources/images/NavButtons/ButtonWhiteResume.jpg"
		, "/TK/resources/images/NavButtons/ButtonAquaAboutMe.jpg"
		, "/TK/resources/images/NavButtons/ButtonAquaPortfolioMe.jpg"
		, "/TK/resources/images/NavButtons/ButtonAquaResume.jpg"
		, "/TK/resources/images/TalByDef1a.jpg"
		, "/TK/resources/images/TalByDef2a.jpg"
		, "/TK/resources/images/FallingDewDrop.gif"
		, "/TK/resources/images/FallingDewDropStatic.gif"
		, "/TK/resources/images/Portfolio.jpg"
	]);

    // set body height as soon as page is loaded
	setBodyHeight();

	// create Fancybox gallery of word cloud images
	$('.fancybox').fancybox({
	    padding         : 2
        , changeFade    : 'slow'
        , showNavArrows : true
        , nextEffect    : 'none'
        , prevEffect    : 'none'
        , openEffect    : 'none'
        , closeEffect    : 'none'
    });
    
    // open Fancybox to show "why paper?"
    $('#box_whypaper').fancybox({
	    padding         : 2
	});

	$('#whypaper').click( function() {
	    $('#box_whypaper').trigger('click');
	})
 		
	// percentage based imagemap for word cloud
    var coords = '', prevX = 0, prevY = 0, currentX = 0, currentY = 0, debug = 0;
	$('#wordcloud').click(function(e) {    
      	if( prevX === 0 && currentY !== 0 && debug === 1 ) {
			prevX = currentX;
			prevY = currentY;
		}	

        currentX = ( e.pageX / $(document).width() ) * 100;
     	currentY = ( e.pageY / $(document).height() ) * 100;

		if( prevX !== 0 && debug === 1) {
			console.log('if( ( currentX > %f && currentX < %f ) && ( currentY > %f && currentY < %f ) )',prevX.toFixed(3),currentX.toFixed(3),prevY.toFixed(3),currentY.toFixed(3));
			prevX = 0,prevY = 0,currentX = 0,currentY = 0;
		}
		
		if( debug === 0) {
          	if( ( currentX > 42.194 && currentX < 52.039 ) && ( currentY > 59.172 && currentY < 61.931 ) ) {
                // PRINT DESIGN
                fireModal('printdesign');
            } else if( ( currentX > 65.049 && currentX < 74.895 ) && ( currentY > 59.586 && currentY < 61.655 ) )  {
                // WIREFRAMES
                fireModal('wireframes');
            } else if( ( currentX > 33.193 && currentX < 45.288 ) && ( currentY > 62.414 && currentY < 64.966 ) )  {
                // DESIGN
                fireModal('design');
            } else if( ( currentX > 46.062 && currentX < 64.909 ) && ( currentY > 62.138 && currentY < 63.931 ) ) {
                // EXPERIENCIAL MARKETING
                fireModal('experientialmarketing');
            } else if( ( currentX > 69.339 && currentX < 80.661 ) && ( currentY > 61.862 && currentY < 63.655 ) ) {
                // TOOLS OF THE TRADE
                fireModal('toolsofthetrade');
            } else if( ( currentX > 19.058 && currentX < 34.388 ) && ( currentY > 65.379 && currentY < 67.862 ) ) {
                // PROJECT MANAGEMENT
                fireModal('projectmanagement');
            } else if( ( currentX > 41.561 && currentX < 56.048 ) && ( currentY > 65.103 && currentY < 66.897 ) ) {
                // USER EXPERIENCE
                fireModal('userexperience')
            } else if( ( currentX > 61.252 && currentX < 79.395 ) && ( currentY > 64.000 && currentY < 67.103 ) ) {
                // PROBLEM SOLVING
                fireModal('problemsolving')
            } else if( ( currentX > 22.996 && currentX < 34.740 ) && ( currentY > 68.276 && currentY < 70.138 ) ) {
                // ANIMATION
                fireModal('animation')
            } else if( ( currentX > 38.889 && currentX < 44.585 ) && ( currentY > 68.276 && currentY < 70.069 ) ) {
                // USABILITY
                fireModal('usability')
            } else if( ( currentX > 44.866 && currentX < 72.293 ) && ( currentY > 67.724 && currentY < 70.966 ) ) {
                // ART DIRECTION
                fireModal('artdirection')
            } else if( ( currentX > 72.996 && currentX < 85.935 ) && ( currentY > 68.414 && currentY < 69.586 ) ) {
                // ORGANIZATION
                fireModal('organization')
            } else if( ( currentX > 30.309 && currentX < 42.616 ) && ( currentY > 70.621 && currentY < 71.862 ) ) {
                // INNOVATION
                fireModal('innovation')
            } else if( ( currentX > 43.671 && currentX < 51.688 ) && ( currentY > 72.069 && currentY < 73.586 ) ) {
                // NEGOTIATION
                fireModal('negotiaton')
            } else if( ( currentX > 52.672 && currentX < 69.620 ) && ( currentY > 71.793 && currentY < 73.793 ) ) {
                // COMMUNICATION
                fireModal('communication')
            } else if( ( currentX > 70.464 && currentX < 79.817 ) && ( currentY > 71.793 && currentY < 73.655 ) ) {
                // PEOPLE PERSON
                fireModal('peopleperson')
            } else if( ( currentX > 32.138 && currentX < 43.038 ) && ( currentY > 72.483 && currentY < 74.759 ) ) {
                // MOTIVATION
                fireModal('motivation')
            } else if( ( currentX > 45.007 && currentX < 52.391 ) && ( currentY > 74.276 && currentY < 76.345 ) ) {
                // CLIENTS
                fireModal('clients');
            } else if( ( currentX > 55.696 && currentX < 68.847 ) && ( currentY > 74.828 && currentY < 76.345 ) ) {
                // VOLUNTEERING
                fireModal('volunteering')
            } else if( ( currentX > 69.620 && currentX < 84.459 ) && ( currentY > 74.621 && currentY < 77.172 ) ) {
                // MENTORING
                fireModal('mentoring')
            } else if( ( currentX > 27.426 && currentX < 33.122 ) && ( currentY > 75.241 && currentY < 76.897 ) ) {
                // HOME
                fireModal('home');
            } else if( ( currentX > 33.685 && currentX < 41.139 ) && ( currentY > 75.379 && currentY < 76.414 ) ) {
                // TYPOGRAPHY
                fireModal('typography');
            } else if( ( currentX > 40.366 && currentX < 50.492 ) && ( currentY > 76.828 && currentY < 78.345 ) ) {
                // ILLUSTRATONS
                fireModal('illustrations')
            } else if( ( currentX > 51.617 && currentX < 58.720 ) && ( currentY > 76.552 && currentY < 78.483 ) ) {
                // FITNESS
                fireModal('fitness');
            }
      	}
    });
    
    $('#wordcloud').mousemove( function(e) {
        overX = ( e.pageX / $(document).width() ) * 100;
        overY = ( e.pageY / $(document).height() ) * 100;
        if( 
            ( ( overX > 42.194 && overX < 52.039 ) && ( overY > 59.172 && overY < 61.931 ) ) || 
            ( ( overX > 65.049 && overX < 74.895 ) && ( overY > 59.586 && overY < 61.655 ) ) || 
            ( ( overX > 33.193 && overX < 45.288 ) && ( overY > 62.414 && overY < 64.966 ) ) ||
            ( ( overX > 46.062 && overX < 64.909 ) && ( overY > 62.138 && overY < 63.931 ) ) ||
            ( ( overX > 46.062 && overX < 64.909 ) && ( overY > 62.138 && overY < 63.931 ) ) ||
            ( ( overX > 69.339 && overX < 80.661 ) && ( overY > 61.862 && overY < 63.655 ) ) ||
            ( ( overX > 19.058 && overX < 34.388 ) && ( overY > 65.379 && overY < 67.862 ) ) ||
            ( ( overX > 36.217 && overX < 38.397 ) && ( overY > 65.724 && overY < 67.310 ) ) ||
            ( ( overX > 41.561 && overX < 56.048 ) && ( overY > 65.103 && overY < 66.897 ) ) ||
            ( ( overX > 61.252 && overX < 79.395 ) && ( overY > 64.000 && overY < 67.103 ) ) ||
            ( ( overX > 22.996 && overX < 34.740 ) && ( overY > 68.276 && overY < 70.138 ) ) ||
            ( ( overX > 38.889 && overX < 44.585 ) && ( overY > 68.276 && overY < 70.069 ) ) ||
            ( ( overX > 44.866 && overX < 72.293 ) && ( overY > 67.724 && overY < 70.966 ) ) ||
            ( ( overX > 72.996 && overX < 85.935 ) && ( overY > 68.414 && overY < 69.586 ) ) ||
            ( ( overX > 30.309 && overX < 42.616 ) && ( overY > 70.621 && overY < 71.862 ) ) ||
            ( ( overX > 43.671 && overX < 51.688 ) && ( overY > 72.069 && overY < 73.586 ) ) ||
            ( ( overX > 52.672 && overX < 69.620 ) && ( overY > 71.793 && overY < 73.793 ) ) ||
            ( ( overX > 70.464 && overX < 79.817 ) && ( overY > 71.793 && overY < 73.655 ) ) ||
            ( ( overX > 32.138 && overX < 43.038 ) && ( overY > 72.483 && overY < 74.759 ) ) ||
            ( ( overX > 45.007 && overX < 52.391 ) && ( overY > 74.276 && overY < 76.345 ) ) ||
            ( ( overX > 55.696 && overX < 68.847 ) && ( overY > 74.828 && overY < 76.345 ) ) ||
            ( ( overX > 69.620 && overX < 84.459 ) && ( overY > 74.621 && overY < 77.172 ) ) ||
            ( ( overX > 27.426 && overX < 33.122 ) && ( overY > 75.241 && overY < 76.897 ) ) ||
            ( ( overX > 33.685 && overX < 41.139 ) && ( overY > 75.379 && overY < 76.414 ) ) ||
            ( ( overX > 40.366 && overX < 50.492 ) && ( overY > 76.828 && overY < 78.345 ) ) ||
            ( ( overX > 51.617 && overX < 58.720 ) && ( overY > 76.552 && overY < 78.483 ) ) 
        ) {
           $(this).removeClass('nopointer').addClass('pointer'); 
        } else {
           $(this).addClass('nopointer').removeClass('pointer');             
        }
    })
    
    $('#wordcloud').mouseout( function() {
        $(this).addClass('nopointer').removeClass('pointer');
    })
     
})

$(window).load( function() {
	var finishLoad = new Date();
	var loadTime = finishLoad.getTime() -	TalKellyCom.isStartPreload.getTime();
	if( document.cookie.indexOf('tkVisitor') < 0 ) {
		preload([
			'/TK/resources/images/portfolio.jpg',
			'/TK/resources/images/resume.jpg',
			'/TK/resources/images/whywool.jpg',
			'/TK/resources/images/YurekBabchu.jpg',
			'/TK/resources/images/PortfolioPieces/Thumbnails/BenZen.jpg',
			'/TK/resources/images/PortfolioPieces/Thumbnails/Miffi.gif',
			'/TK/resources/images/PortfolioPieces/Thumbnails/Countdown.jpg',
			'/TK/resources/images/PortfolioPieces/Thumbnails/BlueVellum.jpg',
			'/TK/resources/images/PortfolioPieces/Thumbnails/PizzaHut.jpg',
			'/TK/resources/images/PortfolioPieces/Thumbnails/Luminaire.jpg',
            '/TK/resources/images/PortfolioPieces/Thumbnails/Germbook.jpg',
            '/TK/resources/images/PortfolioPieces/Thumbnails/LNT.jpg',
            '/TK/resources/images/PortfolioPieces/Thumbnails/MBNA.jpg',
			'/TK/resources/images/PortfolioPieces/Thumbnails/Diningin.jpg'
			//, '/TK/resources/images/PortfolioPieces/FullImages/BenZen.jpg',
			//'/TK/resources/images/PortfolioPieces/FullImages/Countdown.jpg',
			//'/TK/resources/images/PortfolioPieces/FullImages/BlueVellum.jpg',
			//'/TK/resources/images/PortfolioPieces/FullImages/PizzaHut.gif',
			//'/TK/resources/images/PortfolioPieces/FullImages/Luminaire.jpg',
			//'/TK/resources/images/PortfolioPieces/FullImages/Germbook.jpg',
			//'/TK/resources/images/PortfolioPieces/FullImages/DininginAnimBlack.gif',
			//'/TK/resources/images/PortfolioPieces/FullImages/MiffiBlack.gif',
		]);
	} else {
		$('#loadoverlay').hide();
		$('#pageArea').show();		
	}

	// fire dew drop animation when user scrolls down
	window.onscroll = setScrollEvent;
    
})

function animateDewDrop() {
    //$('#dewdrop').attr('src','/TK/resources/images/FallingDewDrop.gif');
    $('#dewdrop').removeClass('dewdropstatic').addClass('dewdropactive');
	TalKellyCom.isDewDropAnimated = true;
}

function fireModal(img) {
	setBodyHeight();
	$('#box_'+img).trigger('click');
}

function setBodyHeight() {
	var newHeight = 2039 * ( $(window).width() / 2000 );
	$('#header').height( newHeight * .05 );
	$('#mainArea').height( newHeight * .885 );
	$('#footer').height( newHeight * .065 );
}

function setScrollEvent(e) {
	if( !TalKellyCom.isDewDropAnimated ) {			
		animateDewDrop();
	}
	setBodyHeight();
}