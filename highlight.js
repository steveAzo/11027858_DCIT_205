var currentUrl = window.location.href;

currentUrl = currentUrl.replace(/\/$/, "");

var pageName = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);

var currentPageLink = document.querySelector('a[href="' + pageName + '"]');
if (currentPageLink) {
    currentPageLink.classList.add('active');
}
