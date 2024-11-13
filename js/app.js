document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    var dashboardContent = document.querySelectorAll('.dashboard-content');
    dashboardContent.forEach(content => {
        content.addEventListener('click', () => {
            var currentUrl = window.location.pathname;
            var params = new URLSearchParams(window.location.search);
            
            // var collage = "exampleValue"; 
            var page = content.getAttribute('data');
            params.set('page', page);
            window.location.href = currentUrl + '?' + params.toString();
        });
    });
});
