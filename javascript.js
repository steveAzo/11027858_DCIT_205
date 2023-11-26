document.addEventListener("DOMContentLoaded", function () {
    var headerInclude = document.createElement("header");
    headerInclude.innerHTML = '<object type="text/html" data="header.html"></object>';
    document.body.prepend(headerInclude);
    
    var footerInclude = document.createElement("footer");
    footerInclude.innerHTML = '<object type="text/html" data="footer.html"></object>';
    document.body.appendChild(footerInclude);
});
