document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the main menu visibility on mobile
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle the accordion dropdown logic
    dropdowns.forEach(dropdown => {
        const triggerLink = dropdown.querySelector('a');
        const content = dropdown.querySelector('.dropdown-content');

        // Only attach the dropdown click listener if there is an actual dropdown menu inside
        if (content) {
            triggerLink.addEventListener('click', (e) => {
                // Only apply accordion logic on mobile screens
                if (window.innerWidth <= 768) {
                    e.preventDefault(); 

                    // Close any other open dropdowns for a clean accordion effect
                    document.querySelectorAll('.dropdown-content').forEach(menu => {
                        if (menu !== content) {
                            menu.classList.remove('show');
                        }
                    });

                    // Toggle the clicked dropdown
                    content.classList.toggle('show');
                }
            });
        }
    });

    // Cookie Banner Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    // Check if the user has already made a choice
    if (!localStorage.getItem('cookieChoice')) {
        // Add a small delay so it slides up after the page loads
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    // Save choice and hide banner when buttons are clicked
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieChoice', 'accepted');
        cookieBanner.classList.remove('show');
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookieChoice', 'declined');
        cookieBanner.classList.remove('show');
    });
});
