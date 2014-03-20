$(document).ready(function() {
    $('section').each(function(){
        var $section = $(this); // assigning the object
     
        $(window).scroll(function() {
            var $scrollTop = $(window).scrollTop();
            var $windowHeight = $(window).height();
            var $documentHeight = $(document).height();
            var $sectionHeight = $section.height();

            var $difference = $sectionHeight - 400;

            var $hiddenContentHeight = $documentHeight - $windowHeight;

            var $math = $scrollTop * ($difference / $hiddenContentHeight);

            var $yPos = -($math);
             
            // Put together our final background position
            var $coords = '0 '+ $yPos + 'px';
 
            // Move the background
            $section.css({ backgroundPosition: $coords });
        });
    });
});

