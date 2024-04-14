document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop(); 
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link'); 
    
    navLinks.forEach(function(link) {
        var linkPage = link.getAttribute('href').split("/").pop(); 
        
        if (currentPage === linkPage) { 
            link.classList.add('active'); 
        }
    });
});