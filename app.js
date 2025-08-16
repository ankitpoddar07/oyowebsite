document.addEventListener('DOMContentLoaded', function() {
    // Navigation elements
    const menuToggle = document.querySelector('.bi-three-dots');
    const navMenu = document.getElementById('menu_box');

    // Only proceed if we have the necessary elements
    if (!menuToggle || !navMenu) return;

    // Toggle the navigation menu when the three dots icon is clicked
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');

        // Change the icon based on menu state
        if (navMenu.classList.contains('active')) {
            menuToggle.classList.remove('bi-three-dots');
            menuToggle.classList.add('bi-x');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            menuToggle.classList.remove('bi-x');
            menuToggle.classList.add('bi-three-dots');
            document.body.style.overflow = ''; // Enable scrolling
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && e.target !== menuToggle) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('bi-x');
            menuToggle.classList.add('bi-three-dots');
            document.body.style.overflow = ''; // Enable scrolling
        }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('bi-x');
            menuToggle.classList.add('bi-three-dots');
            document.body.style.overflow = ''; // Enable scrolling
        }
    });

    // Responsive behavior - hide/show menu toggle based on screen size
    function handleResponsiveMenu() {
        if (window.innerWidth <= 768) {
            // Mobile view - hide menu by default, show toggle
            navMenu.classList.remove('active');
            menuToggle.style.display = 'block';
            menuToggle.classList.remove('bi-x');
            menuToggle.classList.add('bi-three-dots');
            document.body.style.overflow = ''; // Ensure scrolling is enabled
        } else {
            // Desktop view - show menu always, hide toggle
            navMenu.classList.remove('active');
            menuToggle.style.display = 'none';
        }
    }

    // Initial check
    handleResponsiveMenu();

    // Update on window resize
    window.addEventListener('resize', handleResponsiveMenu);
});