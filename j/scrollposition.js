$(document).ready(function() {

    var $w = $(window);
    var $scrollTop = $w.scrollTop();

    var $banner = $('#banner');
    var $bannerHeight = $banner.height();
    var $articleHeader = $('article > header');

    $w.scroll( function() {

		$scrollTop = $w.scrollTop();

		var $yOffset = $scrollTop/2;
        var $opacityOffset = ($bannerHeight - $yOffset) / $bannerHeight;
        var $position = '50% -' + $yOffset + 'px';

		$banner.css(
		    {
		        transform: "translateY(" + $yOffset + "px)",
		        opacity: $opacityOffset
		    }
		);

		$articleHeader.css(
            { 
                backgroundPosition: $position
            }
        );

	});

});

