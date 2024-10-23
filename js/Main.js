$(document).ready(function() {
    const $hamburger = $('.hamburger');
    const $navLinks = $('.nav-links');
    const $hamburgerButton = $('.hamburger-button');
    const $dropdowns = $('.dropdown > a');

    // Toggle the main navigation (hamburger menu)
    $hamburger.on('click', function() {
        $navLinks.toggleClass('show');
        $hamburgerButton.toggleClass('show');
        $hamburger.toggleClass('active'); // Toggle 'X' icon for hamburger
    });

    // Handle dropdown functionality in mobile view
    $dropdowns.on('click', function(e) {
        e.preventDefault(); // Prevent default anchor link behavior
        e.stopPropagation(); // Prevent the click event from bubbling up

        const $parentDropdown = $(this).parent(); // Parent 'li'
        const $dropdownMenu = $parentDropdown.find('.dropdown-menu'); // The dropdown menu

        // Check if the dropdown is currently visible
        if ($dropdownMenu.is(':visible')) {
            // If it's visible, slide up to close it
            $dropdownMenu.slideUp(300); // Slide up animation
            $parentDropdown.removeClass('open'); // Remove 'open' class
        } else {
            // If it's not visible, slide down to open it
            $dropdownMenu.slideDown(300); // Slide down animation
            $parentDropdown.addClass('open'); // Add 'open' class for styling
            
            // Close other dropdowns
            closeOtherDropdowns($parentDropdown);
        }
    });

    // Function to close other dropdowns
    function closeOtherDropdowns(currentDropdown) {
        $('.dropdown').each(function() {
            const $this = $(this);
            if ($this[0] !== currentDropdown[0]) { // Ensure we are not closing the currently clicked dropdown
                const $dropdownMenu = $this.find('.dropdown-menu');
                $dropdownMenu.slideUp(300); // Slide up animation
                $this.removeClass('open'); // Remove the 'open' class
            }
        });
    }

    // Close dropdowns if clicked outside
    $(document).on('click', function() {
        $('.dropdown-menu').slideUp(300); // Close all dropdowns
        $('.dropdown').removeClass('open'); // Remove 'open' class from all dropdowns
    });
});
