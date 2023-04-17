$(document).ready(function() {
    // Add click event listener to the image
    $('#logo').on('click', function() {
        // Show alert with text "001"
        window.alert("fa20.bcs.001");
    });
    
    // Function to animate text in delivery div
    function animateText() {
        $('.delivery-text p:first-child').appendTo('.delivery-text').css('opacity', '0');
        $('.delivery-text p:first-child').animate({opacity: '1'}, 2000);
        setTimeout(animateText, 4000); // Adjust timing as needed
    }
    animateText();
});