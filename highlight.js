// highlightActiveLink.js
// Get the current page URL
var currentUrl = window.location.href;

// Remove trailing slash (if any)
currentUrl = currentUrl.replace(/\/$/, "");

// Get the last part of the URL (page name)
var pageName = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);

// Select the corresponding link based on the page name and add the 'active' class
var currentPageLink = document.querySelector('a[href="' + pageName + '"]');
if (currentPageLink) {
    currentPageLink.classList.add('active');
}
