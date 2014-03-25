$(document).ready(function() {

    var $w = $(window);
    var $banner = $('#banner');
    var $bannerHeight = $banner.height();

    $w.scroll( function()
    {
		var $scrollTop = $w.scrollTop();
		var $transformOffset = $scrollTop/2;
        var $opacityOffset = ($bannerHeight - $transformOffset) / $bannerHeight;

		$banner.css(
		    {
		        transform: "translateY(" + $transformOffset + "px)",
		        opacity: $opacityOffset
		    }
		);

	});

});

