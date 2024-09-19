// You can add any interactive features you want here, such as animations or form validation
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.floating-tab');

    // Function to check if tab is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const checkVisibility = () => {
        tabs.forEach(tab => {
            if (isInViewport(tab)) {
                tab.classList.add('visible');
            } else {
                tab.classList.remove('visible');
            }
        });
    };

    // Initial check on page load
    checkVisibility();

    // Add event listener for scrolling
    window.addEventListener('scroll', checkVisibility);
});
