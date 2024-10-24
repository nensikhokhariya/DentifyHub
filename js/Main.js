$(document).ready(function() {
    const $hamburger = $('.hamburger');
    const $navLinks = $('.nav-links');
    const $hamburgerButton = $('.hamburger-button');
    const $dropdowns = $('.dropdown > a');
    const $body = $('body'); // Select the body element

    // Toggle the main navigation (hamburger menu)
    $hamburger.on('click', function() {
        $navLinks.toggleClass('show');
        $hamburgerButton.toggleClass('show');
        $hamburger.toggleClass('active'); // Toggle 'X' icon for hamburger

        // Disable scrolling when menu is open
        if ($navLinks.hasClass('show')) {
            $body.addClass('no-scroll'); // Add the no-scroll class to body
        } else {
            $body.removeClass('no-scroll'); // Remove the no-scroll class from body
        }
    });

    // Handle dropdown functionality in mobile view
    $dropdowns.on('click', function(e) {
        e.preventDefault(); // Prevent default anchor link behavior
        e.stopPropagation(); // Prevent the click event from bubbling up

        const $parentDropdown = $(this).parent(); // Parent 'li'
        const $dropdownMenu = $parentDropdown.find('.dropdown-menu'); // The dropdown menu

        // Check if the dropdown is currently visible
        if ($dropdownMenu.is(':visible')) {
            $dropdownMenu.slideUp(300); // Slide up animation
            $parentDropdown.removeClass('open'); // Remove 'open' class
        } else {
            $dropdownMenu.slideDown(300); // Slide down animation
            $parentDropdown.addClass('open'); // Add 'open' class for styling
            
            closeOtherDropdowns($parentDropdown); // Close other dropdowns
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

        // Re-enable scrolling when menu is closed
        $body.removeClass('no-scroll');
    });
});



function moveContainers() {
    if ($(window).width() <= 991) {
            $('.hamburger-button').insertAfter('.header-main .nav-links li.nav-list:last-child');
    }
    else {
      // Optionally reset the layout when the screen is larger
      // $('.user-container').insertBefore('.left-container');
    }
  }

  // Run on initial load
  $(document).ready(function () {
    moveContainers(); // Call on page load
    $(window).on('resize', moveContainers()); // Call on window resize
  });


//   Stiky Header

$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $("header").addClass("scroll");
      } else {
        $("header").removeClass("scroll");
      }
    });
  });